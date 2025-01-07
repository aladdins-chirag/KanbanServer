const bcrypt = require('bcrypt')
const createResponse = require('../Response/Response')

const EncryptPassword = async (password) => {
    try {
        return await bcrypt.hash(password, 10)
    } catch (error) {
        return res.status(500).json(createResponse(false, error.message, null))
    }
}

const DecryptPassword = async (password, hash) => {
    try {
        return await bcrypt.compare(password, hash)
    } catch (error) {
        return res.status(500).json(createResponse(false, error.message, null))
    }
}

module.exports = { EncryptPassword, DecryptPassword }