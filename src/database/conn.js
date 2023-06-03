const mysql = require('mysql2/promise');

const conn = mysql.createPool({
    database: "tasks",
    user: "root",
    password: "1234",
    host: 'localhost',
    port: "3306",
    waitForConnections: true,
    connectionLimit: 10
});


module.exports = conn;