const socketIO = require("../app")
const { createTask, getTask, deleteTask, updateTaskStatus, updateTask } = require("../DataAccess/TaskDataAccess")

const createTaskServ = async ({ title, description, priority, assignTo, startDate, endDate, userID }) => {
    try {
        const task = await createTask(title, description, priority, assignTo, startDate, endDate, userID)
        return task
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}


const getTaskServ = async () => {
    try {
        const tasks = await getTask()
        if (!tasks?.length) {
            throw Error('No task available!')
        }
        return tasks
    } catch (error) {
        throw new Error(error)
    }
}

const updateTaskServ = async ({ taskId }, updates) => {
    try {
        const updatedTask = await updateTask(taskId, updates)
        return updatedTask
    } catch (error) {
        throw new Error(error)
    }
}

const deleteTaskServ = async ({ taskId }) => {
    try {
        const task = await deleteTask(taskId)
        return task
    } catch (error) {
        throw new Error(error)
    }
}



const updateTaskStatusServ = async ({ taskId }, status) => {
    try {
        const updatedTask = await updateTaskStatus(taskId, status)
        return updatedTask
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = { createTaskServ, getTaskServ, deleteTaskServ, updateTaskServ, updateTaskStatusServ }