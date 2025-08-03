require("dotenv").config(); 
const port=5000
const express=require('express')
const app=express()
const cors=require('cors'); 

app.use(cors())
app.use(express.json())

app.listen(port,(error)=>{
    if(!error){
        console.log(`Server is running at ${port}`)
    }
    else{
        console.log("Error in running server",error)
    }
})