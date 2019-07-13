const db = require('../database/config')

function add(item, id){
    console.log(id)
    let sql = `INSERT INTO todos(text) VALUES(?);`;
    return db.query(sql,[`'${item}'`])
}

async function getItems(){
    let sql = 'SELECT * FROM todos ORDER BY id desc;'
    return db.query(sql)
}

module.exports = {
    add,
    getItems
}