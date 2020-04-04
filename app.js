require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./src/routes');
const cors = require('cors');

app.use(cors());
app.set('port', process.env.PORT_NUMBER);
app.use(express.json());

app.use((request, response, next) => {
    console.log(`${request.method} ${request.url}`);
    next();
});

app.use('/api/v1', router);

module.exports = app;