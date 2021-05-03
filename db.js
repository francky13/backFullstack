var mysqlModel = require('mysql');
let connection = mysqlModel.createPool({
    host: 'mysql-francky.alwaysdata.net',
    user: 'francky',
    password: 'fl5900u',
    database: 'francky_fullstack'
});
module.exports = connection;
