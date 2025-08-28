// index router
const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.render('index', {
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
  });
});

module.exports = indexRouter;
