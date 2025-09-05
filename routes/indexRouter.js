// index router
const { Router } = require('express');
const {
  getMessageById,
  getAllMessages,
} = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', getAllMessages);
indexRouter.get('/:id', getMessageById);

module.exports = indexRouter;
