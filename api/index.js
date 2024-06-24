import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

//DB connection
const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to Database!")
    } catch (error) {
        throw error;
    }
}

app.use('api/login', (req, res) => {
    return res.send("<h1>Login Successful!<h1/>")
})

app.use('api/register', (req, res) => {
    return res.send("<h1>Registration Successful!<h1/>")
})

app.use('/', (req, res)=>{
    return res.send("<h1>Hello, Welcome to my MEAN Stack Project<h1/>")
})

app.listen(8800, ()=>{
    connectMongoDB();
    console.log("Connected to Backend!");
})