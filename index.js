const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require('./data/chefs.json')

app.get('/', (req, res)=>{
    res.send('masala cooking')
})

app.get('/chefs', (req, res)=>{
    res.send(chefs)
})

app.get('/chefs/:id', (req, res)=>{
    const id =req.params.id;
    const selectedId = chefs.find(n=>n.id == id)
    res.send(selectedId)
})

app.listen(port,()=>{
    console.log(`listening port ${port}`);
})