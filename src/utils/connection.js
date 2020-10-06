const mysql = require('mysql');

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "I1tsql",
    database: "hb1300_db"
});

module.exports = connection;