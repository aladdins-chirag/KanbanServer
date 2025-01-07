const Task = require("../Model/TaskModel")
const User = require("../Model/UserModel")

const createTask = async (title, description, priority, assignTo, startDate, endDate, userID) => {
    try {
        const task = await Task.create({
            title,
            description,
            priority,
            assignTo,
            startDate,
            endDate
        })
        await User.updateOne({ _id: userID }, {
            $push: { tasks: task._id }
        })
        return task
    }
    catch (err) {
        throw new Error('Error while saving into DB')
    }
}

const getTask = async () => {
    try {
        const tasks = await Task.find({})
        return tasks
    } catch (error) {
        throw new Error('Error while saving into DB')
    }
}

const deleteTask = async (taskId) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(taskId)
        if (deletedTask === null) throw new Error('Invalid ID')

        // Remove from user 
        await User.updateOne({ tasks: taskId }, {
            $pull: { tasks: taskId }
        })

        return deleteTask
    } catch (error) {
        throw new Error(error)
    }
}

const updateTask = async (taskId, { title, description, priority, assignTo, startDate, endDate }) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(taskId, { title, description, priority, assignTo, startDate, endDate }, { new: true })
        if (updatedTask === null) throw new Error('Invalid ID')
        // console.log(updatedTask)
        return updatedTask
    } catch (error) {
        throw new Error(error)
    }
}

const updateTaskStatus = async (taskId, status) => {
    try {
        const updatedTaskStatus = await Task.findByIdAndUpdate(taskId, { taskStatus: status }, { new: true })
        if (updatedTaskStatus === null) throw new Error('Invalid ID')
        return updatedTaskStatus
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = { createTask, getTask, updateTask, deleteTask, updateTaskStatus }