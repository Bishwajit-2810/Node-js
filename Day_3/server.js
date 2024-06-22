const express = require("express");
const jsonData=require('./jsonObject')
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>")
});
app.get("/bk", (req, res) => {
    res.send("<h1>Hello BK!</h1>")
});
app.get("/good_morning", (req, res) => {
    res.send("<h1>GOOD MORNING!</h1>")
});
app.get("/good_night", (req, res) => {
    res.send("<h1>GOOD NIGHT</h1>")
});
app.get("/hello",(req,res)=>{
    let hello={
        name: 'hello',
        date: "2024-06-16",
        is_morning: true
    
    }
    res.send(hello);
});


app.listen(3000,()=>{
    console.log("server is live");
});

jsonData.bk()
