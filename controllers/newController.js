// controllers/newController.js

const db = require('../db/queries');

async function createNewMessage(req, res) {
  const { username, message } = req.body;
  await db.insertMessage(username, message);
  res.redirect('/');
}

module.exports = { createNewMessage };
