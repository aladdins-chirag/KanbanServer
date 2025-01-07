const express = require('express')
const { createTaskController,
    getTaskController,
    deleteTaskController,
    updateTaskStatusController,
    updateTaskController
} = require('../Controller/TaskController')
const TaskRouter = express.Router()


TaskRouter.post('/add', createTaskController)

TaskRouter.get('/', getTaskController)

TaskRouter.patch('/:id', updateTaskController)
TaskRouter.patch('/status/:id', updateTaskStatusController)

TaskRouter.delete('/:id', deleteTaskController)


module.exports = TaskRouter