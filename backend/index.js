import mongoose from "mongoose";
import express from 'express'
import dotenv from 'dotenv'
import user from './Routes/UserRoutes.js'
import cors from 'cors';
import morgan from "morgan";
import BusRouter from "./Routes/BusRoutes.js";

const app = express()
app.use(express.json())
app.use(cors());
app.use(morgan('dev'));
dotenv.config()

mongoose.connect(process.env.DB, {
    useNewUrlParser:true
})
.then(()=>app.listen(process.env.PORT, ()=>console.log(`Listening at ${process.env.PORT}`)))
.catch((err)=>console.log(err))

app.use('/user', user)
app.use('/bus', BusRouter)