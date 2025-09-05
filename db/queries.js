// db/queries.js
const pool = require('./pool');

async function getMessageById(id) {
  const { row } = await pool.query('SELECT * FROM messages WHERE id = ($1)', [
    id,
  ]);
  return row;
}

module.exports = { getMessageById };
