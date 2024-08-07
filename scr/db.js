const mysql = require('mysql2/promise');

const connectDB = async ()=> {
    return await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'tasks_dv'
    })
}

module.exports = connectDB