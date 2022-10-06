const express = require('express');
const productos = require('./modules/products')
const { json, urlencoded, static } = express;

const app = express();

const PORT = process.env.PORT || 2002;

app.use(json())
app.use(urlencoded({ extended: true }))

app.set('views', './views');

app.set('view engine', '.pug');

app.get('/', (req, res) => {
    res.render('index.pug');
})

app.use('/productos', productos);



const server = app.listen(PORT, () => {
    console.log(`la direcion corre en  http://localhost:${server.address().port}`);
})
