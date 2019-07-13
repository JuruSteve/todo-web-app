const db = require('../database/config')


function add({username, password}){
    let sql = `INSERT INTO users(username, password) VALUES('${username}', '${password}')`;
    return db.query(sql)
}

function findBy(username){
    let sql = 'SELECT * FROM users WHERE username = ?'
    return db.query(sql, username)
}

function findById(id){
    let sql = 'SELECT * FROM users WHERE id = ?'
    return db.query(sql, id)
}



module.exports = {
    add,
    findBy,
    findById
}