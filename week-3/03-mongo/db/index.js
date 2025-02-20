const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://eshansharma108:mjkYLw1BtcKhOYRS@cluster0.vadnd9b.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String, 
    password: String, 
    role: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String, 
    password: String,
    role: String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String, 
    description: String, 
    price: Number, 
    imageLink: String,
    published: Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}