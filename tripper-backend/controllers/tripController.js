// GET all trips
const getTrips = async (req, res) => {
    try {
        // placeholder response for now
        res.status(200).json({ message: "Get all trips" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// GET a single trip
const getTrip = async (req, res) => {
    const { id } = req.params
    try {
        res.status(200).json({ message: `Get trip with id: ${id}` })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// CREATE a new trip
const createTrip = async (req, res) => {
    const { destination, startDate, endDate, notes } = req.body

    try {
        res.status(201).json({
            message: "New trip created",
            trip: { destination, startDate, endDate, notes }
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// DELETE a trip
const deleteTrip = async (req, res) => {
    const { id } = req.params
    try {
        res.status(200).json({ message: `Deleted trip with id: ${id}` })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// UPDATE a trip
const updateTrip = async (req, res) => {
    const { id } = req.params
    const updates = req.body
    try {
        res.status(200).json({
            message: `Updated trip with id: ${id}`,
            updates
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getTrips,
    getTrip,
    createTrip,
    deleteTrip,
    updateTrip
}