import {Router} from "express";
import { login, logout, signup ,refresh } from "../controllers/authController.js";

const authRoutes = Router()

authRoutes.post("/login" ,login)

authRoutes.post("/signup" , signup)

authRoutes.post("/logout", logout)

authRoutes.post("/refresh", refresh)


export default authRoutes