const { Server } = require('socket.io')
let io = null


const createIO = (httpServer) => {
    if (!io) {
        io = new Server(httpServer, {
            cors: {
                origin: function (origin, callback) {
                    // domain which are whitelisted are only allowed to access the API's
                    const whiteListDomains = process.env.CLIENT_DOMAIN ?
                        process.env.CLIENT_DOMAIN.split(',') : null;

                    if (whiteListDomains.indexOf(origin) !== -1) {
                        callback(null, true)
                    } else {
                        callback(null, false)
                    }
                },
                credentials: true
            }
        })
    }
}

const getIO = () => {
    if (!io) return null
    return io
}




module.exports = { createIO, getIO }