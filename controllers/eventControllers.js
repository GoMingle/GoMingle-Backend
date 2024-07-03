import { eventModel } from "../models/eventModel.js";




// Get Event
export const getEvents = async (req, res, next) => {
   try {
       // Get events from database
       const retrieveEvents = await eventModel.find();
       res.status(200).json(retrieveEvents);
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
       const updateEvents = await eventModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
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
 