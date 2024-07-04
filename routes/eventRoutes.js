import { Router } from "express";
import { getAllevents, postEvent, patchEvent, deleteEvent, getEventById } from "../controllers/eventControllers.js";
import { remoteUpload } from "../middlewares/uploads.js";

const eventRouter = Router();

eventRouter.get('/events', getAllevents);
eventRouter.get('/events/:id', getEventById);
eventRouter.post('/events',remoteUpload.single('image'), postEvent);
eventRouter.patch('/events/:id', patchEvent);
eventRouter.delete('/events/:id', deleteEvent);

export default eventRouter;