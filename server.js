import express, {urlencoded, json} from "express";
import cors from 'cors';
import { config } from "dotenv";
import indexRouter from "./routes/index.js";
import db from "./db.js";


if(process.env.NODE_ENV !== 'PRODUCTION')  config();


const app = express();
const port = process.env.PORT || 6000;


db();



app.use(cors());
app.use(urlencoded({extended: true}));
app.use(json())


app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});