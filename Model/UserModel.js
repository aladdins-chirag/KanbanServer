const mongoose = require('mongoose')
const Task = require('./TaskModel')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
}, { timestamps: true, versionKey: false })



const User = mongoose.model('User', userSchema)

module.exports = User