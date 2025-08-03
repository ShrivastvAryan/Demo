require("dotenv").config(); 
const port=5000
const express=require('express')
const app=express()
const cors=require('cors'); 
const userRouter = require('./router/user-router');
const connectDB = require('./db');

app.use(express.json())
app.use(cors())


// Connect to MongoDB
connectDB();

app.use('/api/user',userRouter)



app.listen(port,(error)=>{
    if(!error){
        console.log(`Server is running at ${port}`)
    }
    else{
        console.log("Error in running server",error)
    }
})