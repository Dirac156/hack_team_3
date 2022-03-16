import express from "express";
import { addUser,ViewUser,ViewAllUsers ,SignIn } from "../Controllers/usersController.js";
// import pagesrouter from "./pages.js";
import { authenticate } from "../middlewares/auth.js";

const usersRouter=express.Router();
//Add a user ----Sign Up
usersRouter.post("/register", authenticate ,addUser);
//Add a user ------Sign In
usersRouter.post("/signin",authenticate,SignIn);
//View a User ------
usersRouter.get("/:id", authenticate,   ViewUser);
//View All Users
usersRouter.get("/", authenticate, ViewAllUsers);
 



 

export default usersRouter;