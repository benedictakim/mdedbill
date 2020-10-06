const connection = require('../utils/connection');

async function getAll() {
    const sql = "SELECT * FROM dataset3oct";
    const [rows] = await connection.promise().query(sql);
    return rows;
} 

exports.getAll = getAll;