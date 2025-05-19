require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: 3000,
  allowExitOnIdle: true,
});

module.exports = { pool };
