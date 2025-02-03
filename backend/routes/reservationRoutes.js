const express = require('express')
const { createReservation } = require('../controllers/reservationControllers')

const router = express.Router()

router.post('/create', createReservation)

module.exports = router