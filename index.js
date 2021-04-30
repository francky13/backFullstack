var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT, function() {
  console.log('Chat server running');
});


server.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app));
});

