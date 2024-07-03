import { Router } from "express";
import { getCategories, postCategory } from "../controllers/categoryControllers.js";

const categoryRouter = Router();

categoryRouter.get('/category', getCategories);
categoryRouter.post('/category', postCategory);

export default categoryRouter;