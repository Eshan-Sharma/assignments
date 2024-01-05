const express = require("express");
const app = express();
const port = 3030;

app.use(express.json());

app.get("/", (req,res)=>{
    res.json({msg:"Here"});
});

app.get("/allTodos", (req,res)=>{
    res.json({msg:"todos"})
});

app.post("/todo", (req,res)=>{
    res.json({msg:"added todo"});
});

app.listen(port,()=>{
    console.log("Listening port");
});


