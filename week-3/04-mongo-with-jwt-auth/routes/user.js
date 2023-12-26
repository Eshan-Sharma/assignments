const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    try {
        const {username, password} = req.headers;
        const existingUser = await User.findOne({username});
        if(existingUser){
            res.status(400).json({message:"User already exists"});
        }
        const user = new User({username, password});
        await user.save();
        res.status(201).json({message:"User created successfully"});
    } catch (err) {
        res.status(500).send(err.message);
    }

});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    try{
        const courses = await Courses.find();
        res.status(200).json(courses);
    }catch(err){
        res.status(500).send({message:"Internal server error"});
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{
        const courseId = req.params.courseId;
        res.status(200).json({message: "Course purchased successfully"});
    }catch(err){
        res.status(500).json({message: "Internal server Error"});
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try{
        const userId = req.user._Id;
        res.status(200).json({purchasedCourses:[]});
    }catch(err){
        res.status(500).send(err.message);
    }
});

module.exports = router