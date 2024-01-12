const express = require("express");
const { createTodo, updateTodo } = require("../middleware/types");
const { todo } = require("../db/db");
const cors = require("cors");
const app = express();
const port = 3030;

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.json({msg:"Here"});
});

app.get("/allTodos", async (req,res)=>{
    const todos = await todo.find({});
    res.json(todos);
});

app.post("/todo",async (req,res)=>{
    //zod validation 
    const createPayload = req.body;
    console.log(req.body)
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    //Mongo db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })
});

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success()){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo updated"
    })
});

app.listen(port,()=>{
    console.log("Listening port");
});


