const express = require('express');
const bodyParser = require('body-parser');
const taskController = require('./controllers/taskController');

const app = express();
app.use(bodyParser.json());

app.use('/tasks', taskController);

module.exports = app;
