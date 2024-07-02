import { EventModel } from "../models/eventModel.js";




// Get Event
export const getEvents = async (req, res, next) => {
   try {
       // Get events from database
       const retrieveEvents = await EventModel.find();
       res.json(retrieveEvents);
   } catch (error) {
       next(error);
   }
}


// post Event
export const postEvent = async (req, res, next) => {
   try {
       // Add event to database
       const newEvent = await EventModel.create(req.body);
       // Return response
       res.json(newEvent)
   } catch (error) {
       next(error)
   }
};


// update Event
//
export const patchEvent = async (req, res, next) => {
   try {
       const updateEvents = await EventModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
       res.json(updateEvents);
       // console.log(updateEvents);
   } catch (error) {
       next(error)
   }
}

// Delete Event
export const deleteEvent = async (req, res, next) => {
    try {
        // remove an event
        const removeEvent = await EventModel.findByIdAndDelete(req.params.body)
        // return response
        res.json(removeEvent)
    } catch (error) {
        next(error)
    }
 }
 