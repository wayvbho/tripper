import express from 'express'
import { createTrip, getTrip, getTrips, deleteTrip, updateTrip } from '../controllers/tripController'

const router = express.Router()

router.get('/', getTrips)
router.get('/:id', getTrip)
router.post('/', createTrip)
router.delete('/:id', deleteTrip)
router.patch('/:id', updateTrip)

export default router