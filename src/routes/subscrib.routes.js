import mongoose, { Schema } from 'mongoose'

const subscribSchema = new Schema({
    email: {
        type: String,
        require: true,
        lowocase: true,
    },

})

export const User = mongoose.model("Subscrib", subscribSchema)