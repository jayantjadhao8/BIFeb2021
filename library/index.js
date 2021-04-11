import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routes/user.js"
import mongoose from 'mongoose'
ExtensionScriptApis

const server=express();
const PORT=8888;
server.use(bodyParser.json());

//server.get("/"(req,res)-> res.send("Welcome to my library"));
var homepGE=(req,res)=> res.send("Welcome to my library") //handle http://localhost:8888/

server.use("/user",userRouter)
server.get("/",homepage)

server.listen(PORT)

mongodb+srv://Jayjadhao8:Jayjadhao1@@cluster0.nl0is.mongodb.net/library?retryWrites=true&w=majority