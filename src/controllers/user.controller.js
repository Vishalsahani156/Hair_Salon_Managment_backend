import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../model/user.models.js"
import { ApiResponse } from "../utils/ApiResponse.js";
 const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


    const { fullName, email, phonenumber,dateTime,message} = req.body
    //console.log("email: ", email);

    if (
        [fullName, email, phonenumber].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ phonenumber }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or phonenumber  already exists")
    }
    //console.log(req.files);

    const user = await User.create({
        fullName,
        email,
        phonenumber,
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

})

export {registerUser};