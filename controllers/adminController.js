const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getAdmin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(404).json({ message: 'Please add all the Fields' })
    }

    try {
        let admin = await Admin.findOne({email});
        if(!admin) {
            res.send('user doesnt exist');
            return;
        }

        bcrypt.compare(password, admin.password, (err, result) => {
            if(result){
                let token = jwt.sign({role:"admin"}, process.env.JWT_SECRET_KEY);
                console.log(token);
                res.status(200).json({token:token,role:"admin"});
                return;
            } else{
                res.send('email or password is incorrect');
                return;
            }
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

// exports.createAdmin = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         bcrypt.hash(password, 10, async (err, hash) => {
//             let admin = await Admin.findOne({email});
//             if(admin) res.status(401).send("user already exists");
//             const newAdmin = await Admin.create({email, password: hash});
//             console.log(newAdmin);
//             let token = generateToken(newAdmin);
//             res.cookie("token", token);
//             res.status(201).send('User registered');
//         })
//     } catch (error) {
//         console.log(error);
        
//     }
// }