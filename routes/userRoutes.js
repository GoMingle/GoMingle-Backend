import { Router } from "express";
import { signupUser, loginUser } from "../controllers/auth_controller.js";
import { postUser, patchUser, deleteUser } from "../controllers/userControllers.js";

// define route
const userRouter = Router();

// userlogin and signup
userRouter.post('/user', signupUser);
userRouter.post('/user', loginUser);

userRouter.post('/user', postUser);
userRouter.patch('/user', patchUser);
userRouter.delete('user', deleteUser);

export default userRouter;