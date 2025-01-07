const jwt = require('jsonwebtoken')

const GenerateToken = (username, id) => {
    try {
        return jwt.sign({ username, id }, process.env.ACCESS_TOKEN, { expiresIn: "6h" })
    }
    catch (error) {
        throw error.message
    }
}

module.exports = GenerateToken