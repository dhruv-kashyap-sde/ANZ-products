import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('server working on 3000')
})

app.listen(3000, () => {
    console.log('server working');
    
})