const User = require("../Model/UserModel")

const getAllUser = async () => {
    try {
        return await User.find({}, "username email")
    } catch (e) {
        throw e.message
    }
}
const getUserNotEqualToId = async (id) => {
    try {
        return await User.find({ _id: { $ne: id } })
    } catch (e) {
        throw e.message
    }
}
const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email })
        return user
    } catch (e) {
        throw e.message
    }
}

const getUserTasks = async (id) => {
    try {
        let user = await User.findOne({ _id: id }, 'tasks').populate({ path: 'tasks', options: { sort: { priority: 1 } } });
        return user
    } catch (e) {
        throw new Error(e.message)
    }
}

const saveUser = async (username, email, password) => {
    try {
        const user = await User.create({
            username,
            email,
            password
        })
        return user
    } catch (error) {
        throw new Error(e.message)
    }
}


module.exports = { getUserByEmail, saveUser, getUserTasks, getAllUser, getUserNotEqualToId }