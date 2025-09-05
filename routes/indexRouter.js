// index router
const { Router } = require('express');
const messages = require('../api/db');
const { getMessageById } = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

indexRouter.get('/:messageUser', getMessageById);

module.exports = indexRouter;
