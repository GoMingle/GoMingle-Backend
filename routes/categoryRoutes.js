import { Router } from "express";
import { getCategories, postCategory } from "../controllers/categoryControllers.js";

const CategoryRouter = Router();

CategoryRouter.get('/category', getCategories);
CategoryRouter.post('/category', postCategory);

export default CategoryRouter;