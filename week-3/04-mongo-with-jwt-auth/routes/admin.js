const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try{
        const {username, password} = req.headers;
        const admin = new Admin({username, password, role:"admin"});
        await admin.save();
        res.status(201).send("Admin created successfully");
    }catch(err){
        res.status(500).send(err.message);
    }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    try{
        const {title, price} = req.headers;
        const course = new Course({title, price});
        await course.save();
        res.status(201).send("Course created successfully");
    }catch(err){
        res.status(500).send(err.message)
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try{
        const {username, password} = req.headers;
        const admin = await Admin.findOne({username, password});
        if(!admin){
            return res.status(401).json({message:"Unauthorized access"});
        }
        const courses = await Course.find();
        res.status(200).json(courses);
    }catch(err){
        res.status(500).send(err.message);
    }
});

module.exports = router;