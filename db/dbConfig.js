const knex = require('knex');

const config = require('../knexfile.js');

const db = process.env.DB_ENV || 'development';

module.exports = knex(config[db]);
