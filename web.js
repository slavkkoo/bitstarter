var express = require('express');
var app = express();
var fs = require ('fs');

var buffer = fs.readFileSync ('index.html');
var text= buffer.toString('utf-8');
app.use(express.logger());
app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
