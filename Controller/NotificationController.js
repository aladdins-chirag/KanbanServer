const Notification = require("../Model/NotificationModel")
const createResponse = require("../Response/Response")

const getNotificationController = async (req, res) => {
    try {
        const { userID } = req.params  // SEND NOTIFICATION WHICH IS NOT CREATED BY LOGGED IN USER
        const notifications = await Notification.find({ isSeen: { $eq: false }, userID: { $ne: userID } }).sort({ createdAt: -1 })
        if (!notifications) return res.status(400).json(createResponse(false, "No notification to show", null))
        return res.status(200).json(createResponse(true, '', notifications))
    } catch (error) {
        return res.status(500).json(createResponse(false, "Internal server error", null))
    }
}

const addNotificationController = async (req, res) => {
    try {
        const { userID, task, assignBy } = req.body
        const newNotification = await Notification.create({
            userID,
            tasksDetails: task,
            assignBy
        })
        return res.status(200).json(createResponse(true, "", newNotification))
    } catch (error) {
        return res.status(500).json(createResponse(false, "Internal server error", null))
    }
}

const updateIsSeenStatusController = async (req, res) => {
    try {
        const { id } = req.params
        const notifications = await Notification.updateOne({ _id: id }, {
            $set: { isSeen: true }
        })
        return res.status(200).json(createResponse(true, "Status updated successfully...", notifications))
    } catch (e) {
        return res.status(500).json(createResponse(false, "Internal server error", null))
    }
}

// const updateIsSeenStatus = async (req, res) => {
//     try {

//     } catch () {

//     }
// }

module.exports = { getNotificationController, addNotificationController, updateIsSeenStatusController }