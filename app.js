let express = require('express');
let app = express();

let cors = require('cors');
app.use(cors({ origin: "http://localhost:8080/" }));
app.use(express.static(__dirname + "/web"));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
// import route
var authRoute = require('./routes/auth');
var SuiviRoute = require('./routes/SuiviRoute');
var InfoRoute = require('./routes/inforoute');





app.use('/api/auth', authRoute);
app.use('/api/suivi', SuiviRoute);
app.use('/api/info', InfoRoute);


module.exports = app;