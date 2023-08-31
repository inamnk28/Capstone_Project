const {sign, verify} = require('jsonwebtoken')
require("dotenv").config()
const { verify } = require('jsonwebtoken');
require("dotenv").config();

function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    })
}
function verifyAToken(req, res, next) {
    const token = req.header("authorization");

    // Check if the token is present in the request header
    if (!token) {
        return res.status(401).json({ message: "Access denied. Token not provided." });
    }

    try {
        // Verify the token using your secret key
        const decoded = verify(token, process.env.SECRET_KEY);

        // Attach the decoded payload to the request object
        req.user = decoded;

        // Move to the next middleware or route handler
        next();
    } catch (error) {
        // Handle token verification error
        return res.status(401).json({ message: "Access denied. Invalid token." });
    }
}
module.exports = {
    createToken,
    verifyAToken
}
