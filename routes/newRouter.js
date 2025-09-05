// newRouter.js
const { Router } = require('express');
const { createNewMessage } = require('../controllers/newController');

const newRouter = Router();

newRouter.get('/', (req, res) => {
  res.render('form');
});

newRouter.post('/', createNewMessage);

module.exports = newRouter;
