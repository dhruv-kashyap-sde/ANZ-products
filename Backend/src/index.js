import express from "express"
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('server working')
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server working on ${PORT}`);
    
})