const express = require('express')
const { loginController, logoutController, registerController } = require('../Controller/AuthController')
const AuthRouter = express.Router()


AuthRouter.post('/login', loginController)
AuthRouter.post('/register', registerController)
AuthRouter.get('/logout', logoutController)


module.exports = AuthRouter