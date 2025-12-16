const express = require("express");
const connectDb = require("./config/db")
const todoSchema = require("./models/todo")
connectDb();
const app = express();
const PORT = 3000
app.get("/",(req,res)=>{
    res.send("Get Route")
})
app.post("/create",(req,res)=>{
    res.send("POST Route")
})
app.put("/update",(req,res)=>{
    res.send("PUT Route")
})
app.delete("/delete",(req,res)=>{
    res.send("DELETE Route")
})
app.listen(PORT,()=>{
    console.log(`Server running is on http://localhost:${PORT}`)
})