async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const { username, password } = req.headers;
        const user = await User.findOne({username, password});
        if(!user){
            return res.status({message: "Unauthorized access"});
        }
        req.user = user;
        next();
    }catch(err){
        res.status(500).json({message: "Internal server Error"});
    }
}

module.exports = userMiddleware;