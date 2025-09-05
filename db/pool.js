// db/pool.js
const { Pool } = require('pg');
const { ENV_VARS } = require('../constants/envs');

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: ENV_VARS.HOST, // or wherever the db is hosted
  user: ENV_VARS.USER,
  database: ENV_VARS.DATABASE,
  password: ENV_VARS.PWD,
  port: ENV_VARS.DB_PORT, // The default port
});
