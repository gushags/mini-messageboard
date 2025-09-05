// controllers/indexController.js

const db = require('../db/queries');

async function getMessageById(req, res) {
  const { messageId } = req.params;
  const message = await db.getMessageById(messageId);
  res.render('message', { message: message });
}

module.exports = { getMessageById };
