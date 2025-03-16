import mongoose from "mongoose";
import {DB_name} from "../constance.js";
// const MONGOOSE_URI='mongodb+srv://vishalsahani1444:BvHm62b7j@cluster1.mqden.mongodb.net/'
const connectDB=async()=>{
    try{
      const connectedResponse=  await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_name}`)
        console.log(`${process.env.PORT}`)
        console.log("MongoDB data base is connected ");
        console.log(`${connectedResponse.connection.host}`);

    }
    catch(error){
        console.log("Fail the data base connection",error);
        process.exit(1);
       
    }
}
export default connectDB