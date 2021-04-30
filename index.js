var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static(__dirname + "/web"));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


var SuiviRoute = require('./routes/SuiviRoute');




app.use('/api/suivi', SuiviRoute);


server.listen(PORT, function() {
  
  console.log('Express server listening on port ' + PORT);
  const all_routes = require('express-list-endpoints');
  console.log(all_routes(app));
});





