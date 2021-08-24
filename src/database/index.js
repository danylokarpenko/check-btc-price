const fs = require('fs');
const path = require('path');
const errors = require('@feathersjs/errors');

const { validateFileName, getRandomHash } = require('./functions');

const datastoreDir = './dataStorage';

class DatabaseManager {
	constructor(filename) {
		validateFileName(filename);

		this.filename = filename;
		this.filenamePath = path.join(__dirname, datastoreDir, `${filename}.json`);

		try {
			fs.accessSync(this.filenamePath);
		} catch (err) {
			fs.writeFileSync(this.filenamePath, '[]');
		}
	}

	async createNewRecord(record) {
		// Read filecontents of the datastore
		const jsonRecords = await fs.promises.readFile(this.filenamePath, {
			encoding: 'utf8'
		});

		// Parsing JSON records in JavaScript
		// object type records
		const objRecord = JSON.parse(jsonRecords);

		// Adding new record
		objRecord.push(this._mapRecordBeforeInsert(record));

		// Writing all records back to the file
		await fs.promises.writeFile(this.filenamePath, JSON.stringify(objRecord, null, 2));

		return record;
	}

	async findOneByFieldName(fieldName, value) {
		const jsonRecords = await fs.promises.readFile(this.filenamePath, {
			encoding: 'utf8'
		});

		const objRecord = JSON.parse(jsonRecords);
		const record = objRecord.find(item => item[fieldName] === value);
		if (!record) {
			throw new errors.NotFound(`No record was found in '${this.filename}' filename`);
		}
		return record;
	}

	_mapRecordBeforeInsert(record) {
		if (!record.hasOwnProperty('id')) {
			record.id = getRandomHash();
		}
		return record;
	}
}

module.exports = DatabaseManager;
