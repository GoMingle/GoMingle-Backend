



// post Event
export const postEvent = async (req, res, next) => {
    try {
        // Add event to database
        const newEvent = await eventModel.create(req.body);
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
        // update event by id
        const updateEvent = await eventModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        // Return response
        res.json(updateEvent)
    } catch (error) {
        next(error)   
    } 
};

// Delete Event
export const deleteEvent = async (req, res, next) => {
    try {
        // remove an event
        const removeEvent = await eventModel.findByIdAndDelete(req.params.body)
        // return response
        res.json(removeEvent)
    } catch (error) {
        next(error)
    }
}


    
