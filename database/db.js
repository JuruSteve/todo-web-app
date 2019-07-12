const mysql = require('mysql2')
const util = require('util')


const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'root', database: 'todos', port: 8889})

db.connect(err=>{
    if(err) throw err
    console.log('DB connected')
})

// Promisify the db's query method so we can use ES7 syntax
db.query = util.promisify(db.query)
module.exports = db