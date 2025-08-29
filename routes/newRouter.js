// newRouter.js
const { Router } = require('express');

const newRouter = Router();

newRouter.get('/', (req, res) => {
  res.render('form');
});
newRouter.post('/', (req, res) => {
  res.send('<p>Form needs to be submitted now</p>');
});

module.exports = newRouter;
