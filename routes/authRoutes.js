import { Router } from "express";
import { signupUser, loginUser } from "../controllers/auth_controller.js";

// define route
const authRouter = Router();

// userlogin and signup
authRouter.post('/user', signupUser);
authRouter.post('/user', loginUser);

authRouter.post('/user', postUser);
authRouter.patch('/user', patchUser);
authRouter.delete('user', deleteUser);

export default authRouter;