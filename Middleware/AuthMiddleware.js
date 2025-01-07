const jwt = require('jsonwebtoken')
const createResponse = require('../Response/Response')

const auth = async (req, res, next) => {
    try {
        let getToken = req.cookies

        if (getToken['KanbanCookie'] === undefined || getToken['KanbanCookie'] === null) {
            return res.status(403).json(createResponse(false, "Unauthorized", null))
        }
        const token = getToken['KanbanCookie'].split(" ")[1]
        if (!token) {
            return res.status(403).json(createResponse(false, "Unauthorized", null))
        }
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, _) => {
            if (err) return res.status(400).json(createResponse(false, "Invalid Token!", null))
            next()
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json(createResponse(false, "Internal Server Error!", null))
    }
}


module.exports = auth