const express = require('express');
const cors = require('cors');

const { infoRequest } = require('./middleware/infoRequests.middlware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',infoRequest , require('./routes/api'));

module.exports = app