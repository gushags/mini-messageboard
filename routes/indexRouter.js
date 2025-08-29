// index router
const { Router } = require('express');

const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const getMessages = () => messages;

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = { indexRouter, getMessages };
