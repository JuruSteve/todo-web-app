const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')


const server = express()

server.use(express.json())
server.use(cors({origin: ['http://localhost:3000']}))
server.use(helmet())
server.use(morgan('dev'))

// api routes

server.get('/', (req, res)=>{
    res.end('Welcome to RCP Test Project');
})

module.exports = server;