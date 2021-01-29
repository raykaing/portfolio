'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

const router = express.Router();
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

module.exports = app;
module.exports.handler = serverless(app);
