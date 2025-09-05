// controllers/indexController.js

const db = require('../db/queries');

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Mini Messageboard', messages: messages });
}

async function getMessageById(req, res) {
  const { messageId } = req.params;
  const message = await db.getMessageById(messageId);
  res.render('message', { message: message });
}

module.exports = { getMessageById, getAllMessages };
