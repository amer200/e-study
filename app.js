require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))
// routes
const mainRoute = require('./routes/main');
app.use('/', mainRoute);

app.listen(8080);
console.log('Server is listening on port 8080');