import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        phoneNumber: {
            type: Number,
            required: true,
            unique: true,

        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            index: true
        },
        dateTime:{
            type:String,
            requrired:true,
            // unique:true,
            
        
        },
        message:{
            type:String,
            required:true,
            // unique:true,
        },
        bodyMessage:{
            type:String,
            // required:true,
            // unique:true,
        }
    }
)

export const User = mongoose.model("User", userSchema)