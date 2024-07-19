import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import crateRoute from './routes/crate.routes.js';
import userRoute from './routes/user.routes.js';
import { createCrate } from './task.js';


const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

const PORT =  process.env.PORT || 5001;
const MongoURI =  process.env.MONGODB_URI;

mongoose.connect(MongoURI).then(()=>{

    console.log('Mongo Connected Succesfully')
    app.listen(PORT, ()=>{
        console.log(`Server is up and running at ${PORT}`);
        setInterval(createCrate, 10* 60 * 60 * 1000);//every 10 sec a new crate will be added
    })
}).catch(error=> console.log(error));


app.use('/api',crateRoute);
app.use('/api',userRoute);