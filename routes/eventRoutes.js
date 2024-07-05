import { Router } from "express";
import { getAllevents, postEvent, patchEvent, deleteEvent, getEventById, getEventsByDate } from "../controllers/eventControllers.js";
import { remoteUpload } from "../middlewares/uploads.js";

const eventRouter = Router();
eventRouter.get('/searchByDate', getEventsByDate);
eventRouter.get('/allevents', getAllevents);
eventRouter.get('/events/:id', getEventById);
eventRouter.post('/addEvents',remoteUpload.single('image'), postEvent);
eventRouter.patch('/events/:id', patchEvent);
eventRouter.delete('/events/:id', deleteEvent);

export default eventRouter;