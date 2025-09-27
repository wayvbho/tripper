import { Request, Response } from 'express'

// GET all trips
export const getTrips = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ message: "Get all trips" })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

// GET a single trip
export const getTrip = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    try {
        res.status(200).json({ message: `Get trip with id: ${id}` })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

// CREATE a new trip
export const createTrip = async (req: Request, res: Response): Promise<void> => {
    const { destination, startDate, endDate, notes } = req.body

    try {
        res.status(201).json({
            message: "New trip created",
            trip: { destination, startDate, endDate, notes }
        })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

// DELETE a trip
export const deleteTrip = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    try {
        res.status(200).json({ message: `Deleted trip with id: ${id}` })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

// UPDATE a trip
export const updateTrip = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const updates = req.body
    try {
        res.status(200).json({
            message: `Updated trip with id: ${id}`,
            updates
        })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}