require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const reservationRoutes = require('./routes/reservationRoutes')
const eventRoutes = require('./routes/eventRoutes')
const cors = require('cors');

const app = express()

app.use(express.json())

app.use(cors())

app.use('/reservation', reservationRoutes)
app.use('/event', eventRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})