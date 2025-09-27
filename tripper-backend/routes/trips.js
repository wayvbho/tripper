const express = require('express')
const {
    createTrip,
    getTrip,
    getTrips,
    deleteTrip,
    updateTrip
} = require('../controllers/tripController')
const router = express.Router()

// GET all trips
router.get('/', getTrips)

//GET a single trip
router.get('/:id', getTrip)

//POST a new trip
router.post('/', createTrip)

//DELETE a trip
router.delete('/:id', deleteTrip)

//UPDATE a trip
router.patch('/:id', updateTrip)


module.exports = router