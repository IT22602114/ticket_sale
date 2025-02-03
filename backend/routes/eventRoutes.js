const express = require('express')
const { getAllEvents } = require('../controllers/eventControllers')

const router = express.Router()

router.get('/events', getAllEvents)

module.exports = router