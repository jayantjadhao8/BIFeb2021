import mongoose from 'mongoose'
const Schema= mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String
        required:true
    }
    Gender:{
        type:String
        required:true
    }
    Age:{
        type:String
        required:true
    }
    City:{
        type:String
        required:true
    }
}  {timestamps:true})

export {user}