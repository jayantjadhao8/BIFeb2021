import { user } from '../../Models/user.js'
import {User} from '../models/user.js'

let users=[] //this act as a user table(database)..later will replace this with DB call

export const getUsers=(req,res)=>{
    console.log("In function call getUser.. I this /users endpoint got hit. ")
    res.send(users)
    user.find(
        .then(
            (result)=>{
                res.send(result)
            }
        )
    )
}

export const getUsers=(req,res)=>{
    console.log("In function call getUser.. I this /users endpoint got hit. ")
    const user = new User({
        name: req.body.name'
        gender: req.body.gender,
        age: req.body.age,
        city: req.body.city,
    })
    user.save()
        .them(
            (result)=>{
                req.send(result)
            }
        )
        .catch(
            (err)=>{
                console.log(err)
        )
    users.push(req.body)
    res.send("ok")

}