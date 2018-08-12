const router = require('express').Router()
const todoController = require('../controllers/todo')

router.post('/', todoController.create)
      .get('/', todoController.findAll)
      .get('/:id', todoController.findOne)
      .put('/:id', todoController.update)
      .delete('/:id', todoController.delete)

module.exports = router