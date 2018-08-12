const router = require('express').Router()
const userController = require('../controllers/users')

router.post('/register', userController.register)
      .post('/login',userController.login)
      .post('/signin/facebook',userController.loginFb)
      .get('/', userController.findAll)
      .get('/:id', userController.findOne)
      .put('/:id', userController.update)
      .delete('/:id', userController.delete)

module.exports = router