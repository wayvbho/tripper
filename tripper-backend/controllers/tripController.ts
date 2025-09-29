import { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all trips
export const getTrips = async (req: Request, res: Response) => {
  try {
    const trips = await prisma.trip.findMany();
    res.json(trips);
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({ error: "Failed to fetch trips" });
  }
};

// GET a single trip
export const getTrip = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const trip = await prisma.trip.findUnique({
      where: { id: Number(id) }, // Prisma requires a number for your id field
    });

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.status(200).json(trip);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE a new trip
export const createTrip = async (req: Request, res: Response) => {
  try {
    const { destination, startDate, endDate, notes } = req.body;

    const trip = await prisma.trip.create({
      data: {
        destination,
        startDate: new Date(startDate),  // convert string to Date
        endDate: new Date(endDate),
        notes,
      },
    });

    res.status(201).json(trip);
  } catch (error) {
    console.error("Error creating trip:", error);
    res.status(500).json({ error: "Failed to create trip" });
  }
};

// DELETE a trip
export const deleteTrip = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const trip = await prisma.trip.delete({
        where: { id: Number(id) },
    });

    res.status(200).json({ message: "Trip deleted", trip });
  } catch (error: any) {
    res.status(404).json({ error: "Trip not found" });
  }
};

// UPDATE a trip
export const updateTrip = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const trip = await prisma.trip.update({
        where: { id: Number(id) },
        data: updates, // Prisma applies only the fields provided
    });

        res.status(200).json({ message: "Trip updated", trip });
  } catch (error: any) {
        res.status(404).json({ error: "Trip not found or update failed" });
  }
};