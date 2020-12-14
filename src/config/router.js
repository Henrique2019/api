const express = require('express')

module.exports = (server) => {
    const router = express.Router()
    server.use('/api', router)

    const todoservice = require('../api/todo/todo-service')
    todoservice.register(router, '/personas')
}