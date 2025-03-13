const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected");
    } catch (error) {
        console.log("mongoDB connect failed", error);
        process.exit(1);
    }
}
module.exports = connectDB