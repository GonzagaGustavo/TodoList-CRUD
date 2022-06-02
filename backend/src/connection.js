const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'todolist'
})
connection.query("CREATE TABLE IF NOT EXISTS list(id INT PRIMARY KEY AUTO_INCREMENT, tarefa VARCHAR(250), checked BOOLEAN)")

module.exports = connection