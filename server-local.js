'use strict';

const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.use('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.listen(3000, () => console.log('Local app listening on port 3000!'));
