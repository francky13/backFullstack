var PORT = process.env.PORT || 8080;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('routes'));

var SuiviRoute = require('./routes/SuiviRoute');
app.use('/api/suivi', SuiviRoute);


server.listen(PORT, function() {
  console.log('Chat server running'+ PORT);
  const all_routes = require('express-list-endpoints');
  console.log(all_routes(app));
});


