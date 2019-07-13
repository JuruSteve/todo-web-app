const router = require('express').Router();
const todos = require('../controllers/todos');

router.post('/add', todos.add);

router.get('/', todos.find);

module.exports = router;