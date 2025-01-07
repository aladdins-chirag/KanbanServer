const express = require('express')
const { getUserTasksController,
    createUserTasksController,
    updateUserTaskStatusController,
    updateUserTaskController,
    deleteUserTaskController,
    getAllUserController } = require('../Controller/UserController')

const auth = require('../Middleware/AuthMiddleware')
const UserRouter = express.Router()

UserRouter.get('/', getAllUserController)
UserRouter.get('/:id', auth, getUserTasksController)
UserRouter.post('/createTask', auth, createUserTasksController)
UserRouter.patch('/taskStatus/:taskId', auth, updateUserTaskStatusController)
UserRouter.patch('/updateTask/:taskId', auth, updateUserTaskController)
UserRouter.delete('/deleteTask/:taskId', auth, deleteUserTaskController)


module.exports = UserRouter
