import { users } from '../../Models/user.js'

let users=[] //this will act as a user table(database)..later will replace this with DB call

export const getUsers=(req,res)=>{
    console.log("In function call getUser.. I this /users endpoint got hit. ")
    res.send(users)
   
}

export const createUser=(req,res)=>{
    console.log("In function call getUser.. I this /users endpoint got hit. ")
    //users.push(req.body)
    const user = new User({
        Name: req.body.name'
        Gender: req.body.gender,
        Age: req.body.age,
        City: req.body.city,
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
            }
        )
}