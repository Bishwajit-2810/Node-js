const express=require('express')
const app=express()
const db=require('./db')
const person=require('./models/person')

app.get('/',function (req,res){
    res.send("Welcome to the hotel")
})

app.listen (3000,()=>{
    console.log("listening to port 3000")
})