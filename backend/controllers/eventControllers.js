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

const getEvent = async (req, res, next) => {
    const { id } = req.params;
    try {
        const eventData = await Event.findOne({
            $or: [
                { 'events.id': id },
                { 'virtualEvents.id': id }
            ]
        });

        if (!eventData) {
            return next(errorHandler(404, 'Event data not found'))
        }

        let event = eventData.events.find(event => event.id === id);
        if (!event) {
            event = eventData.virtualEvents.find(event => event.id === id);
        }

        if (!event) {
            return next(errorHandler(404, 'Event data not found'))
        }

        res.status(200).json(event)
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllEvents,
    getEvent
}
