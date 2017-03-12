const express = require('express')
const router = express.Router()
const controller = require('../controllers/todoController')

router.get('/todos', controller.getTodo)
router.post('/todo', controller.addTodo)
router.put('/todo/:id', controller.editTodo)
router.delete('/todo/:id', controller.removeTodo)
router.put('/todo/:id/complete', controller.complete)
router.put('/todo/:id/uncomplete', controller.uncomplete)

module.exports = router
