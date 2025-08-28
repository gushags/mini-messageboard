// newRouter.js
const { Router } = require('express');

const newRouter = Router();

newRouter.get('/', (req, res) => {
  res.render('new', { newcopy: 'Testing this copy.' });
});

module.exports = newRouter;
