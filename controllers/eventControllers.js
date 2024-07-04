import { eventModel } from "../models/eventModel.js";




export const getAllevents = async (req, res, next) => {
    try {
        // Get query params
        const { limit =10, skip=0, filter="{}", fields="{}" } = req.query;
        // Get all events from database
        const allevents = await eventModel
            .find(JSON.parse(filter))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
        // Return all recipes as response
        res.json(allevents);
    } catch (error) {
        next(error);
    }
}


// post Event
export const postEvent = async (req, res, next) => {
    try {
        // Add event to database
        const newEvent = await eventModel.create(req.body);
        // Return response
        res.status(201).json(newEvent)
    } catch (error) {
        next(error)
    }
};


// update Event
export const patchEvent = async (req, res, next) => {
    try {
        const updateEvents = await eventModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updateEvents);
        // console.log(updateEvents);
    } catch (error) {
        next(error)
    }
}

// Delete Event
export const deleteEvent = async (req, res, next) => {
    try {
        // remove an event
        const removeEvent = await eventModel.findByIdAndDelete(req.params.body)
        // return response
        res.status(200).json(removeEvent)
    } catch (error) {
        next(error)
    }
}



//  get event by id
export const getEventById = async (req, res) => {
    try {
        const event = await eventModel.findById(req.params.id);
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}


