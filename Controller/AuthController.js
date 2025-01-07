const createResponse = require("../Response/Response")
const loginServ = require("../Service/AuthServ")
const { createUserServ } = require("../Service/UserServ")

const loginController = async (req, res) => {
    try {
        const { token, userID, user, email } = await loginServ(req.body)
        return res.status(200).cookie('KanbanCookie', 'Bearer ' + token, { httpOnly: true, SameSite: 'Lax', Secure: false }).json(createResponse(true, `Welcome ${user}👋`, { userID, user, email }))
    } catch (error) {
        return res.status(500).json(createResponse(false, error.message, null))
    }
}

const registerController = async (req, res) => {
    try {
        const user = await createUserServ(req.body)
        return res.status(201).json(createResponse(true, 'User saved Successfully!', null))
    } catch (error) {
        return res.status(500).json(createResponse(false, 'Something went wrong!', null))
    }
}

const logoutController = async (req, res) => {
    return res.status(200).clearCookie('KanbanCookie').json(createResponse(true, "Logout Successfully!", null))
}


module.exports = { loginController, logoutController, registerController }