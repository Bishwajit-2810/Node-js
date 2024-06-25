const mongoose = require('mongoose');

const mongoURL='mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL)

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("db connected")
});
db.on('error',()=>{
    console.log("db error")
});
db.on('disconnected',()=>{
    console.log("db disconnected")
});

module.exports=db
