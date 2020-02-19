const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const logger = require('morgan');

const { connectDB } = require('./models');
const userRouter = require('./routes/userRouter');

connectDB();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'pppp.',
    data: []
  });
});

app.use('api/v1/auth', userRouter);

// Handle invalid request
app.all('*', (req, res) =>
  res.status(404).json({
    success: false,
    message: 'Route does not exist...',
    body: []
  })
);

module.exports = app;
