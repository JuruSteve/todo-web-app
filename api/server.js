const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const AuthRouter = require('../routes/auth-router');
const TodosRouter = require('../routes/todos-router');
const protected = require('../controllers/protected-route');

const server = express();

server.use(express.json());
server.use(cors({origin: ['http://localhost:3000']}));
server.use(helmet());
server.use(morgan('dev'));

// api routes

server.get('/', (req, res)=>{
    res.end('Welcome to RCP Test Project');
})

// auth routes (Register, Login)
server.use('/api/auth', AuthRouter);

// todo routes
server.use('/api/todos',protected, TodosRouter);


module.exports = server;