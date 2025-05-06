import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv()

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB