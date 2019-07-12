const db = require('../database/config')


function add({username, password}){
    let sql = `INSERT INTO users(username, password) VALUES('${username}', '${password}')`;
    return db.query(sql)
}

function findBy(username){
    let sql = 'SELECT * FROM users WHERE username = ?'
    return db.query(sql, username)
}

module.exports = {
    add,
    findBy
}