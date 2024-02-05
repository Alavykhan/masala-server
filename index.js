const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin:'https://masala-server-gfiaym018-alavykhan.vercel.app'
}

app.use(cors(corsOptions))

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