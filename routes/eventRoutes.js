import { Router } from "express";
import { getEvents, postEvent, patchEvent, deleteEvent } from "../controllers/eventControllers.js";

const EventRouter = Router();

EventRouter.get('/events', getEvents);
EventRouter.post('/events', postEvent);
EventRouter.patch('/events/:id', patchEvent);
EventRouter.delete('/events/:id', deleteEvent);

export default EventRouter;