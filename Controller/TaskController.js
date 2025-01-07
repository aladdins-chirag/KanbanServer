const createResponse = require("../Response/Response")
const { createTaskServ, getTaskServ, deleteTaskServ, updateTaskStatusServ, updateTaskServ, getTaskByIDServ } = require("../Service/TaskServ");

const createTaskController = async (req, res) => {
    try {
        const task = await createTaskServ(req.body);
        return res.status(201).json(createResponse(true, 'Task created Succesfully!', task))
    } catch (error) {
        return res.status(500).json(createResponse(false, error.message, null))
    }
}

const getTaskController = async (req, res) => {
    try {
        const tasks = await getTaskServ()
        return res.status(200).json(createResponse(true, '', tasks))
    } catch (e) {
        return res.status(500).json(createResponse(false, error.message, []))
    }
}


const deleteTaskController = async (req, res) => {
    try {
        const task = await deleteTaskServ(req.params)
        if (task)
            return res.status(200).json(createResponse(true, 'Task Deleted Successfully!', null))
    } catch (error) {
        return res.status(500).json(createResponse(false, error.message, null))
    }
}

const updateTaskController = async (req, res) => {
    try {
        const updatedTask = await updateTaskServ(req.params, req.body)
        if (updatedTask)
            return res.status(200).json(createResponse(true, 'Task Updated Successfully!', updatedTask))
    } catch (error) {
        return res.status(500).json(createResponse(false, error.message, null))
    }
}

const updateTaskStatusController = async (req, res) => {
    try {

        const updatedTask = await updateTaskStatusServ(req.params, req.body.status)
        if (updatedTask)
            return res.status(200).json(createResponse(true, 'Task Status Updated Successfully!', updatedTask))
    } catch (error) {
        return res.status(500).json(createResponse(false, error.message, null))
    }
}

module.exports = { createTaskController, getTaskController, deleteTaskController, updateTaskStatusController, updateTaskController }