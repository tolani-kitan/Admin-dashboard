const pgp = require('pg-promise');
const promise = require('bluebird');
const queries = require('../src/queries');
const config = require('./index');

const pg = pgp({ promiseLib: promise, noWarnings: true });
const db = pg(config.db.db_dev);

module.exports = { db, queries };
