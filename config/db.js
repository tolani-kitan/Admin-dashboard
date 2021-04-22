const pgp = require('pg-promise');
const promise = require('bluebird');
const queries = require('../src/queries');
const keys = require('./keys');

const pg = pgp({ promiseLib: promise, noWarnings: true });
const db = pg(keys.db_url);

module.exports = { db, queries };
