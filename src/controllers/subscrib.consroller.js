import { asyncHandler } from "../utils/asyncHandler.js"
import {User} from "../models/user.model.js"
import { ApiError } from "../utils/ApiError"
const Subscrib=asyncHandler(async(req,res)=>{
    const{email}=req.body 
    if(!email){
        throw new ApiError(400,'plese provide email afte subscrib ')

    }
    const exitUsers=await User.findOne({
        
    })
  
})