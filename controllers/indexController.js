// controllers/indexController.js

const db = require('../db/queries');

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', {
    title: 'Mini Messageboard With PostgreSQL',
    messages: messages,
  });
}

async function getMessageById(req, res) {
  const { id } = req.params;
  const message = await db.getMessageById(id);
  res.render('message', { message: message });
}

module.exports = { getMessageById, getAllMessages };
