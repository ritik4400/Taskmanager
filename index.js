const express = require('express');
const mongoose = require('mongoose');
const {connectionDB} = require('./src/utils/db');


require('dotenv').config();
const app = express();

app.use(express.json());

//routes
const secureRoute = require('./src/routes/routes')
app.use('/api/v1/user', secureRoute)

app.get('/path',(req,res)=>{
    res.send('sytem is working');
})
const port = process.env.port ||  4000;

connectionDB().then(() => {
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  }).catch((error) => {
    console.error("Error connecting to the database", error);
  });
