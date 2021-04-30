let app = require('./app');
let port = process.env.PORT || 3000;
var http = require('http');
var server = http.Server(app);
 server.listen(port, function () {
    console.log('Express server listening on port ' + port);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app));
});