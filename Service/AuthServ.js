const { getUserByEmail } = require("../DataAccess/UserDataAccess")
const { DecryptPassword } = require("../Utils/EncryptDecrypt")
const GenerateToken = require("../Utils/GenerateToken")

const loginServ = async ({ email, password }) => {

    try {
        if (!email || !password) throw 'Email and Password must be filled!'

        let user = await getUserByEmail(email)
        if (!user) throw 'User not found!'

        let isEqual = await DecryptPassword(password, user?.password)
        if (!isEqual) throw 'Invalid Email or Password!'

        const token = GenerateToken(user?.username, user?._id)
        return { token, userID: user?._id, user: user?.username, email: user?.email }
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = loginServ