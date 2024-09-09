const mysql = require("mysql")
const fs = require('fs');
const bcrypt = require("bcrypt")

const DB_HOST = 'localhost'
const DB_USER = 'root'
const DB_PASSWORD = ''
const DB_DATABASE = 'userDB'
const DB_PORT = 3306

// const DB_HOST = process.env.DB_HOST
// const DB_USER = process.env.DB_USER
// const DB_PASSWORD = process.env.DB_PASSWORD
// const DB_DATABASE = process.env.DB_DATABASE
// const DB_PORT = process.env.DB_PORT

const db = mysql.createPool({
    connectionLimit: 100,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
})

db.getConnection((err, connection) => {
    if (err) throw (err)
    console.log("DB connected successful: " + connection.threadId)

})

// Read SQL seed query
const seedQuery = fs.readFileSync("db/seeding.sql", {
    encoding: "utf-8",
})
  
const psw = Math.random()
.toString(36)
.substring(2)
const hash = bcrypt.hashSync('admin', 10)

console.log("Running SQL seed...")

// Run seed query
db.query(seedQuery, [hash], err => {
if (err) {
  throw err
}
console.log("SQL seed completed! Password for initial admin account: " + psw)
})
