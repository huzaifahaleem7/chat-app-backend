import dotenv from "dotenv";
dotenv.config();
export const port = process.env.PORT ||8001
export const DB_NAME = "chatapp"