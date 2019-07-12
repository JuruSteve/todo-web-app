const TodoModel = require('../models/todos-model')
const db = require('../database/config')

async function add(req, res){
    try {
        const {text} = req.body

        // add user to the db
        const newItem = await TodoModel.add(text)

        res.status(201).json({message: 'Successfully added item', result: newItem.affectedRows})        
    } catch (error) {
        res.status(500).json({message: 'Unable to add item', error: error.errno})                
    }

}

async function find(req, res){
    try {
        const todos = await TodoModel.getItems()
        res.status(200).json({result: todos})
    } catch (error) {
        res.status(500).json({message: 'Unable to retrieve items', error: error.errno})                
    }
}

module.exports = {
    add,
    find
}