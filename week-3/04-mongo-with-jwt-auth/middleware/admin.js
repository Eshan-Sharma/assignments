const jwt = require('jsonwebtoken');
const jwtSecret = "secret";
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const token = req.headers.authorization;
        if(!token){
            return res.status(401).json({message:"Unauthorized access"});
        }
        const decoded = jwt.verify(token, jwtSecret);
        const { username, password } = req.headers;
        const admin = await Admin.findById(decoded.userId);
        if(!admin){
            return res.status(401).json({message:"Unauthorized access"});
        }
        req.admin = admin;
        next();
    }catch(err){
        res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = adminMiddleware;