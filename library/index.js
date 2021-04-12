import express from "express"
import bodyParser from "body-parser"
//import userRouter from "./routes/users.js"
//import mongoose from 'mongoose'

//mongodb+srv://Jayjadhao8:jayant1@cluster0.nl0is.mongodb.net/library?retryWrites=true&w=majority

//mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
//    .then(
//        (result) => {
//            console.log("Connected to the Database")
//            server.listen(PORT)
//            console.log("Server started successfully")
//        }
//    )
//    .catch(
//        (err)=>{
//            console.log(err)
//        }
//    )

const server=express()
const PORT=8888
server.use(bodyParser.json())
server.get("/"(req,res)-> res.send("Welcome to my library"))

homepage=(req,res)=> res.send("Welcome to my library") //handle http://localhost:8888/
//server.use("/user",userRouter)
server.get("/",homepage)

server.listen(PORT)

