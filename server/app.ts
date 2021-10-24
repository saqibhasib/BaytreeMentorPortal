require("dotenv").config();
const express=require('express');
import mongoose from 'mongoose';

const bodyParser = require("body-parser");
const cors = require('cors');

import { Request, Response } from 'express';
import connectDB from './src/api/v1/models/index';

const app=express();

let corsOptions = {
    origin: process.env.CLIENT_ORIGIN || "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json()); // content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // content-type - application/x-www-form-urlencoded

connectDB(); // Connects to database at the port # mentioned in db.config.ts

app.get("/", (req:Request, res:Response) => {
    res.json({ message: "default page for the server"});
});

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT,()=>{
    console.log(`App is running on localhost ${PORT}.`);
});
