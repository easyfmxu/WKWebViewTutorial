var express = require("express");
var app = express();
var path = require("path");

app.use("/", express.static(__dirname));

app.get('/', function(req, res){
   res.sendFile(path.join('index.html')); 
});


var portNum  = 3000;
app.listen(portNum);
console.log("Running at port: " + portNum);