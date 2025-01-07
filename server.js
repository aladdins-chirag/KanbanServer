require('dotenv').config()
const app = require('./app')
const dbConnect = require('./DB/dbConnect')
const User = require('./Model/UserModel')
const Notification = require('./Model/NotificationModel')
const { createIO, getIO } = require('./Socket/SocketIO')

//dbConnection
dbConnect()

// create http server instance
const server = app.listen(process.env.PORT || 5001, () => {
    console.log(`Server starting at PORT ${process.env.PORT}`)
})


//Socket instance created
createIO(server)

//Socket connection..
const socketIO = getIO()
socketIO?.on('connection', (socket) => {
    console.log('client connected...', socket.id)
    socket.on('new task', async (task) => {
        console.log('client creating task...', socket.id)
        try {
            const notification = await Notification.create({
                userID: task?.userID,
                tasksDetails: task,
                assignBy: task?.assignBy
            })

            // Update all users except by one who create notification...
            await User.updateMany({ _id: { $ne: task?.userID } }, {
                $push: { tasks: task?.taskId }
            })

            socket.broadcast.emit('task notify', notification)
        } catch (err) {
            console.log(err)
        }
    })
    socket.on('disconnect', () => {
        console.log(`Client with ${socket.id} disconnected...`)
    })
})

