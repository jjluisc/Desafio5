const express = require('express');
const productos = require('./modules/products')
const { json, urlencoded, static } = express;

const app = express();

const PORT = process.env.PORT || 2000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.set('view engine', '.ejs');

app.get('/', (req, res) =>{
    res.render('pages/index');
});

app.use('/productos', productos);



const server = app.listen(PORT, () => {
    console.log(`Direccion de Ejs: http://localhost:${server.address().port}`);
})
