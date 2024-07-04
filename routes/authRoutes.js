import { Router } from "express";
import { signupUser, loginUser } from "../controllers/auth_controller.js";

// define route
const authRouter = Router();

// userlogin and signup
authRouter.post('/user/signup', signupUser);
authRouter.get('/user/login', loginUser);

export default authRouter;