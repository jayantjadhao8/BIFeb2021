import express from 'express';
import {getUsers,createUser,getUserByID,deleteUserById,updateUserById} from '../controllers/users.js'

const router=express.Router();

router.get("/",getUsers)
//router.get("/id",getUserByid)
//router.post("/",createUser)
//router.delete("/id",deleteUserByid)
//router.patch("/id",upadateUserByid)

//router.put("/id",updateUser)

// localhost:8080/user?name=Jayant&age=25
export default router //



