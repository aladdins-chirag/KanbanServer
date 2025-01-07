const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Kanban DB Connected...')
    } catch (error) {
        console.error('Error in connecting to db...')
    }
}

module.exports = dbConnect

// handling db close
process.on('SIGINT', async () => {
    await mongoose.disconnect()
    console.log("Kanban DB disconnected through app termination")
    process.exit(0);
})