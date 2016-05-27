// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'a0ws1mgcu2uclhu9',
    password: "otfb9z5pvr7jtese",
    database: "axt4sskar5g4m1jx"
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('DATABASE: connected as id ' + connection.threadId);
});

module.exports = connection;