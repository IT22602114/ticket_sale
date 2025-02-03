const mongoose = require('mongoose')

const speakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

const eventSchema = new mongoose.Schema({
    events: [
        {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            location: {
                type: String
            },
            description: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            currency: {
                type: String,
                required: true
            },
            speakers: [speakerSchema],
            image: {
                type: String,
                required: true
            }
        }
    ],
    virtualEvents: [
        {
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            platform: {
                type: String
            },
            time: {
                type: String
            },
            description: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            currency: {
                type: String,
                required: true
            },
            speakers: [speakerSchema],
            image: {
                type: String,
                required: true
            }
        }
    ]
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event