require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const TaskRouter = require('./Route/TaskRoute')
const UserRouter = require('./Route/UserRoute')
const AuthRouter = require('./Route/AuthRoute')
const NotificationRoute = require('./Route/NotificationRoute')


const app = express() // instance of express object is created for handling routes,middleware etc

// Middlewares
app.use(cors({
    origin: (origin, callback) => {
        const whilteListDomains = process.env.CLIENT_DOMAIN ? process.env.CLIENT_DOMAIN.split(',') : null
        whilteListDomains?.includes(origin) ? callback(null, true) : callback(null, false)
    },
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const prefix = '/api'

//Route Handler
app.use(`${prefix}/tasks`, TaskRouter)
app.use(`${prefix}/users`, UserRouter)
app.use(`${prefix}/auth`, AuthRouter)
app.use(`${prefix}/notification`, NotificationRoute)


// express instance
module.exports = app


