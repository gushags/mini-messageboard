// newRouter.js
const { Router } = require('express');
const { getMessages } = require('./indexRouter');

const newRouter = Router();
const messages = getMessages();

newRouter.get('/', (req, res) => {
  res.render('form');
});

newRouter.post('/', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = newRouter;
