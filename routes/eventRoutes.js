import { Router } from "express";
import { getEvents, postEvent, patchEvent, deleteEvent } from "../controllers/eventControllers.js";

const eventRouter = Router();

eventRouter.get('/events', getEvents);
eventRouter.post('/events', postEvent);
eventRouter.patch('/events/:id', patchEvent);
eventRouter.delete('/events/:id', deleteEvent);

export default eventRouter;