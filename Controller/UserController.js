const createResponse = require("../Response/Response")
const UserServ = require("../Service/UserServ")
const { createTaskController, updateTaskStatusController, updateTaskController, deleteTaskController } = require("./TaskController")


const getAllUserController = async (req, res) => {
    try {
        const users = await UserServ.getAllUserServ()
        res.status(200).json(createResponse(true, '', users))
    } catch (e) {
        res.status(500).json(createResponse(false, 'Something went wrong!', null))
    }
}

const createUserTasksController = async (req, res) => {
    try {
        // in req.body send userId
        createTaskController(req, res)
    } catch (error) {
        return res.status(500).json(createResponse(false, 'Something went wrong!', null))
    }
}

const getUserTasksController = async (req, res) => {
    try {
        const user = await UserServ.getUserTasksServ(req.params)
        return res.status(200).json(createResponse(true, '', user))
    } catch (error) {
        return res.status(500).json(createResponse(false, 'Something went wrong!', null))
    }
}

const updateUserTaskController = async (req, res) => {
    try {
        updateTaskController(req, res)
    } catch (error) {
        return res.status(500).json(createResponse(false, 'Something went wrong!', null))
    }
}

const updateUserTaskStatusController = async (req, res) => {
    try {
        updateTaskStatusController(req, res)
    } catch (error) {
        return res.status(500).json(createResponse(false, 'Something went wrong!', null))
    }
}

const deleteUserTaskController = async (req, res) => {
    try {
        deleteTaskController(req, res)
    } catch (error) {
        return res.status(500).json(createResponse(false, 'Something went wrong!', null))
    }
}


module.exports = {
    getAllUserController,
    getUserTasksController,
    createUserTasksController,
    updateUserTaskStatusController,
    updateUserTaskController,
    deleteUserTaskController
}