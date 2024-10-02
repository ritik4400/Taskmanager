const express = require('express');
const mongoose = require('mongoose');
const { connectionDb } = require('./src/utils/db');


require('dotenv').config();
const app = express();

app.use(express.json());

app.get('/path',(req,res)=>{
    res.send('sytem is working');
})
const port = process.env.port ||  4000;

app.listen(port,async()=>{
    console.log(`app is running on port : ${port}`);
    try {
        await connectionDb();
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
    
})