// controllers/indexController.js

const messages = require('../api/db'); // the messages database

function getMessageByUser(req, res) {
  const { messageUser } = req.params;
  const message = messages.find((message) => message.user === messageUser);

  if (!message && messageUser) {
    throw new Error('Message not found');
  }
  res.render('message', { message: message }); // Render 'message.ejs' and pass the message variable
}

module.exports = { getMessageByUser };
