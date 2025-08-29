// controllers/indexController.js

const messages = require('../api/db'); // the messages database

async function getMessageByDateAdded(req, res) {
  const { messageAdded } = req.params;

  const message = await getMessage(Number(messageAdded));

  if (!message) {
    throw new Error('Message not found');
  }
  return message;
}

async function getMessage(messageAdded) {
  return messages.find((message) => message.added === messageAdded);
}

module.exports = { getMessageByDateAdded };
