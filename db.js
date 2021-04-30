var mysqlModel = require('mysql');
let connection = mysqlModel.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fullstackcovis'
});
module.exports = connection;

