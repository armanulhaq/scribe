import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("MOongo Connceted");
    } catch {}
};

export default connectDB;
