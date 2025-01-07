const { getUserByEmail, saveUser, getUserTasks, getAllUser } = require("../DataAccess/UserDataAccess")
const { EncryptPassword } = require("../Utils/EncryptDecrypt")


const getAllUserServ = async () => {
    try {
        return await getAllUser()
    } catch (e) {
        throw new Error(e.message)
    }
}

const createUserServ = async ({ username, email, password }) => {
    try {

        if (!email || !password) return res.status(400).json(createResponse(false, 'Please provide Credentials!', null))

        // check user already exist
        let user = await getUserByEmail(email)

        if (user) return res.status(400).json(createResponse(false, 'User already exists!', null))

        // hash password
        const hashPassword = await EncryptPassword(password)
        // save user
        user = await saveUser(username, email, hashPassword)
        return user
    } catch (e) {
        throw new Error(e.message)
    }
}

const getUserTasksServ = async ({ id }) => {
    try {
        const user = await getUserTasks(id)
        return user
    } catch (e) {
        throw new Error(e.message)
    }
}

const UserServ = {
    createUserServ, getUserTasksServ, getAllUserServ
}

module.exports = UserServ