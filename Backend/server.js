const express = require("express");
const connectDb = require("./config/db")
const todo = require("./models/todo")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config();
connectDb();
const app = express();
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT
app.get("/",async(req,res)=>{
   try{
    const data = await todo.find();
   res.json(data);
   }catch(err){
    res.send(err);
   }
})
app.post("/create",async(req,res)=>{
    try{
        const newTodo =new todo(req.body);
        const saveTodo = await newTodo.save();
        res.status(201).json(saveTodo)
    }catch(err)
    {
        res.send(err);
    }
})
app.put("/update/:id",async(req,res)=>{
    try{
        const updatedTodo = await todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedTodo);
    }catch(err){
        res.send(err);
    }
})
app.delete("/delete/:id",async(req,res)=>{
    try{
        await todo.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"Deleted Succesfully"
        })
    }
    catch(err){
        res.send(err);
    }
})
app.listen(PORT,()=>{
    console.log(`Server running is on http://localhost:${PORT}`)
})