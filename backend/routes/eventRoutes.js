const express = require('express')
const { getAllEvents, getEvent } = require('../controllers/eventControllers')

const router = express.Router()

router.get('/events', getAllEvents)
router.get('/getEvent/:id', getEvent)

module.exports = router