// controllers/indexController.js

const messages = require('../api/db'); // the messages database

function getMessageByUser(req, res) {
  const { messageUser } = req.params;
  const message = messages.find((message) => message.user === messageUser);

  if (!message) {
    return res.status(404).render('404', { missingField: messageUser });
  }
  res.render('message', { message: message }); // Render 'message.ejs' and pass the message variable
}

module.exports = { getMessageByUser };
