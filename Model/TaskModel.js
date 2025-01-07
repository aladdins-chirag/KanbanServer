const mongoose = require('mongoose')
const User = require('./UserModel')
// {
//     title: 'New',
//     description: 'This is new task',
//     priority: 'low',
//     assignTo: [
//       'Arpit',
//       'Deepak'
//     ],
//     userID: '670ac6ab182a4977fb06c751'
//   }

const taskSchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: Number, required: true },
    assignTo: [String],
    startDate: { type: String },
    endDate: { type: String },
    taskStatus: { type: String, default: "TODO" }

}, { timestamps: false, versionKey: false })

const Task = mongoose.model('Task', taskSchema)

module.exports = Task