const Reservation = require('../models/reservationModel')
const errorHandler = require('../utils/error')

const createReservation = async (req, res, next) => {

    const { firstname, lastname, telephone, email, address } = req.body

    if (!firstname || !lastname || !telephone || !email || !address) {
        return next(errorHandler(400, "Please provide all required fields!"));
    }

    try {
        const newReservation = new Reservation({
            firstname,
            lastname,
            telephone,
            email,
            address
        })

        const reservation = await newReservation.save()

        res.status(201).json(reservation)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    createReservation
}