import express from "express"
import router from "./router.js"
import db from "./db/db.js"
import cookieParser from "cookie-parser"
import {config} from "dotenv"
config()

const server = express()
server.use(express.json())
server.use(cookieParser())
server.use(router)

await db()
server.listen(process.env.PORT,()=>{
    console.log("server running" )
})