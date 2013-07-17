var express = require('express'); // http://expressjs.com/api.html

var app = express.createServer(express.logger());

var fs = require('fs'); // fs cannot be used without being referenced https://github.com/mhevery/jasmine-node/issues/186

app.get('/', function(request, response) {
  var content = fs.readFileSync("index.html","utf8");
  response.send( content );
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
