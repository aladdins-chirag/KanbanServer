const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    tasksDetails: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        priority: { type: Number, required: true },
        assignTo: [String],
        startDate: { type: String },
        endDate: { type: String },
        taskStatus: { type: String, default: "TODO" }
    },
    assignBy: { type: String, required: true },
    isSeen: { type: Boolean, default: false }
}, { timestamps: true })

const Notification = mongoose.model('Notification', notificationSchema)
module.exports = Notification