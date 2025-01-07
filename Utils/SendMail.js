const nodemailer = require('nodemailer')

const sendMail = async () => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            username: '',
            password: ''
        }
    })

    const mssgOption = {
        from: ``,
        to: ``,
        subject: ``,
        text: ``
    }

    try {
        const info = await transporter.sendMail(mssgOption)
        if (info.rejected?.length > 0) {
            console.log('Error sending email...')
        }
        else {
            console.log('Email send successfully with id ', info.messageId)
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = sendMail