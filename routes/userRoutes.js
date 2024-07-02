import { Router } from "express";
import { postUser, patchUser, deleteUser } from "../controllers/userControllers.js";


const userRouter = Router();

userRouter.post('/user', postUser);
userRouter.patch('/user', patchUser);
userRouter.delete('user', deleteUser);

export default userRouter;