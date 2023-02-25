import { Router } from "express"
import UserController from "./user.controller"
import { checkAuth } from "../../middlewares/auth.middleware"

const user = Router()

// user.use(checkAuth)

user.post("/signin", UserController.signin)
user.post("/signup", UserController.signup)
user.get("/profile", checkAuth, UserController.profile)

export default user 
