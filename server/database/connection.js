import mongoose from "mongoose";

// CONNECTING MONGODB DATABASE
const connectDB = async () => {
    try {
        // MONGODB CONNECTION STRING
        const con = await mongoose.connect(process.env.MONGO_URI, {
            // getting rid of unnecessary warnings
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}

export default connectDB

