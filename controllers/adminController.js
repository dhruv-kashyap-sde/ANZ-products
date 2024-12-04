const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/generateToken');

exports.getAdmin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(404).json({ message: 'Please add all the Fields' })
    }

    try {
        let admin = await Admin.findOne({email});
        if(!admin) res.send('user doesnt exist');

        bcrypt.compare(password, user.password, (err, hash) => {

        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

exports.createAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        bcrypt.hash(password, 10, async (err, hash) => {
            const newAdmin = await Admin.create({email, password: hash});
            console.log(newAdmin);
            let token = generateToken(newAdmin);
            res.cookie("token", token);
            res.status(201).send('User registered');
        })
    } catch (error) {
        console.log(error);
        
    }
}