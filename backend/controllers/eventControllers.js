const Event = require('../models/eventModel')
const errorHandler = require('../utils/error')

const getAllEvents = async (req, res, next) => {
    try {
        const events = await Event.find()
        res.status(200).json(events)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllEvents
}
