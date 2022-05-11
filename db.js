/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://postgres:2118@localhost/lunchly");

db.connect();

module.exports = db;
