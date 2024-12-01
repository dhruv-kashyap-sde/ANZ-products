const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const categoryRoutes = require('./Routes/categoryRoutes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const bcrypt = require('bcryptjs');
const Admin = require('./models/admin')

const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api', categoryRoutes);

app.post('/api/admin', async (req, res) => {
    const { email, password } = req.body;
    try {
        bcrypt.hash(password, 10, async (err, hash) => {
            const newAdmin = new Admin({email, password: hash});
            await newAdmin.save();
            res.status(201).send('User registered');
        })
    } catch (error) {
        console.log(error);
        
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
