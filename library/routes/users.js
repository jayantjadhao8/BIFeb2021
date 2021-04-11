import express from 'express';
import {getUsers} from '../controllers/users.js'

const router=express.Router();

router.get("/",getUsers)
router.get("/id",getUserByid)
router.post("/",createUser)
router.delete("/id",deleteUserByid)
router.patch("/id",upadateUserByid)
router.put("/id",updateUser)


export default router



