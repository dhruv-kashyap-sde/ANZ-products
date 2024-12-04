const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({email: user.email}, process.env.JWT_SECRET_KEY);
};

module.exports.generateToken = generateToken;