const express = require('express')
const { getNotificationController, addNotificationController, updateIsSeenStatusController } = require('../Controller/NotificationController')
const NotificationRoute = express.Router()


NotificationRoute.get('/all/:userID', getNotificationController)
NotificationRoute.post('/add', addNotificationController)
NotificationRoute.patch('/:id', updateIsSeenStatusController)


module.exports = NotificationRoute