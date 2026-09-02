const path = require("path");
let express = require("express");
let app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

module.exports = app;
