var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

app.listen(port);
console.log("======================");
console.log("Listening on angularflix " + port);
console.log("======================");