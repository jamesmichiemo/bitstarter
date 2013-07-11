var express = require('express');

var content = fs.readFileSync('index.html','utf8');
 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World from index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
