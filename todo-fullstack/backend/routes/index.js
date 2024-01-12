const express = require("express");
const { createTodo, updateTodo } = require("../middleware/types");
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
    //zod validation 
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb
});

app.put("/completed", (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success()){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
});

app.listen(port,()=>{
    console.log("Listening port");
});


