// index router
const { Router } = require('express');
const messages = require('../api/db');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

indexRouter.get('/:messageUser', (req, res) => {
  const messageUser = req.params.messageUser; // Get the user's name from the URL parameter
  const message = messages.find((message) => message.user === messageUser);
  res.render('message', { message: message }); // Render 'message.ejs' and pass the message variable
});

module.exports = indexRouter;
