var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();
let cors = require('cors');
var http = require('http');
var server = http.Server(app);
app.use(cors({ origin: "http://localhost:5000/" }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.static(__dirname + "/web"));
var SuiviRoute = require('./routes/SuiviRoute');
var authRoute = require('./routes/auth');
var InfoRoute = require('./routes/inforoute');
var VaccinsRoute = require('./routes/vaccinsRoute');


app.use('/api/auth', authRoute);
app.use('/api/suivi', SuiviRoute);
app.use('/api/info', InfoRoute);
app.use('/api/vaccins', VaccinsRoute);



server.listen(PORT, function() {
  console.log('Chat server running');
   const all_routes = require('express-list-endpoints');
    console.log(all_routes(app));
});




