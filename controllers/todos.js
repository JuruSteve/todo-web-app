const TodoModel = require('../models/todos-model');
const db = require('../database/config');
const UserModel = require('../models/user-model');

async function add(req, res){
    try {
        const {text} = req.body
        const {subject} = req.decodedToken
        const [user] = await UserModel.findById(subject)
        // linking todos with users
        if(user){
            const newItem = await TodoModel.add(text, user.id)
            res.status(201).json({message: 'Successfully added item', result: newItem.affectedRows})        
        }
        // add user to the db

    } catch (error) {
        console.log(error)
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