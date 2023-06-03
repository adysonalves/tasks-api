require('dotenv').config();
const express = require('express');
const app = express();

const routsList = require('./routes/routsList');

app.use(express.json());
app.use(routsList);







module.exports = app;