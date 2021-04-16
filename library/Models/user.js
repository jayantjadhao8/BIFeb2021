import mongoose from 'mongoose'
const Schema= mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    collegeName:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
}, {timestamp:true})

export const User=mongoose.model('User',userSchema)