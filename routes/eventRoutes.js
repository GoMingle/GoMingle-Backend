import { Router } from "express";

import { getEvents, postEvent, patchEvent,  } from "../controllers/eventControllers.js";

const eventRoutes = Router();

eventRoutes.get('/events', getEvents);

export default eventRoutes;
