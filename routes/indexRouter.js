// index router
const { Router } = require('express');
const messages = require('../api/db');

const indexRouter = Router();
const { getMessageByDateAdded } = require('../controllers/indexController');

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

indexRouter.get('/:messageName', (req, res) => {
  const messageName = req.params.messageName; // Get the user's name from the URL parameter
  const { message } = messages.find((message) => message.name === messageName);
  res.render('message', { message: message }); // Render 'user.ejs' and pass the userName variable
});

module.exports = indexRouter;
