const mysql = require('mysql2')


const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'me',
    database: 'ecommerce',
    password: '621654',
})



module.exports = pool.promise()