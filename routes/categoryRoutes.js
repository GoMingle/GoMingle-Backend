import { Router } from "express";
import { getCategories, postCategory } from "../controllers/categoryControllers.js";
import { remoteUpload } from "../middlewares/uploads.js";

const categoryRouter = Router();

categoryRouter.get('/category', getCategories);
categoryRouter.post('/category', postCategory);
categoryRouter.post('/category', remoteUpload.single('image'), postCategory);

export default categoryRouter;