import mongoose from "mongoose";
import { config } from "dotenv";

if(process.env.NODE_ENV !== 'production') config();


const dbUrl = process.env.DB_URL;


const db = () => {
    mongoose.connect(dbUrl, () => {
        console.log("Connected to database");
    });
}



export default db;