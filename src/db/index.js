import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`DB Connect !! DB Host ${connection.connection.host}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("DB Connection Failed", error);
    process.exit(1);
  }
};
export default dbConnection;
