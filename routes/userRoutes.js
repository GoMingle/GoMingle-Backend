import { Router } from "express";
import { postUser,patchUser, deleteUser } from "../controllers/userControllers.js";
import { loginUser, signupUser } from "../controllers/auth_controller.js";


const userRouter = Router();

// Auth routes
userRouter.post('/signup', signupUser); // Route to sign up a user
userRouter.post('/login', loginUser); // Route to log in a user

// other routes
userRouter.post('/user', postUser);
userRouter.patch('/user', patchUser);
userRouter.delete('/user', deleteUser);

export default userRouter;