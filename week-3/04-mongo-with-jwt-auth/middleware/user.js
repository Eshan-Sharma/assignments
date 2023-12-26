const jwt = require('jsonwebtoken');
const jwtSecret = "secret";
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const token = req.headers.authorization;
        if(!token){
            return res.status(401).json({message:"Unauthorized access"});
        }
        const decoded = jwt.verify(token, jwtSecret);
        const { username, password } = req.headers;
        const user = await User.findById(decoded.userId);
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