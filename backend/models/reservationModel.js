const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Reservation = mongoose.model('Reservation', reservationSchema)

module.exports = Reservation