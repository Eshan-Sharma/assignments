const mongoose = require("mongoose");
const url = "mongodb+srv://eshansharma108:mjkYLw1BtcKhOYRS@cluster0.vadnd9b.mongodb.net/"
mongoose.connect(url);

const todoSchema = mongoose.Schema({
    title: String, 
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.export = {todo};