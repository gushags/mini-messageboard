const express = require('express');
const path = require('node:path');
const app = express();

// Get application ready to use ejs templates
// from 'views' folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Get app ready to serve static files fro public
// like css and images
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

const indexRouter = require('./routes/indexRouter.js');
const newRouter = require('./routes/newRouter.js');

app.use('/', indexRouter);
app.use('/new', newRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`Mini Message Board app - listening on port ${PORT}!`);
});
