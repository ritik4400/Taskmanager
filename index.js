const express = require('express');
const app = express();

app.use(express.json());

app.get('/path',(req,res)=>{
    res.send('sytem is working');
})
const port = 4000;
app.listen(port,()=>{
    console.log(`app is running on port : ${port}`);
    
})