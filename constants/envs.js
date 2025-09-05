// constants/envs.js

require('dotenv').config();

exports.ENV_VARS = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  DATABASE: process.env.DATABASE,
  PWD: process.env.PWD,
  DB_PORT: process.env.DB_PORT,
};
