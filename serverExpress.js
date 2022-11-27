const express = require('express');
const Contenedor = require('./Contenedor.js');

const archivo = new Contenedor("productos.txt");
const app = express();

const server = app.listen(8080, ()=>{
})

app.get('/', (req, res) =>{
    let htmlString = '<h1 style="color:blue">Server Express</h1>';
    htmlString = htmlString.concat('<h2 style="color:blue">End Points:</h2>');
    htmlString = htmlString.concat('<ul><li><a href="./productos">Todos los productos</a></li>');
    htmlString = htmlString.concat('<li><a href="./productoRandom">Producto Random</a></li></ul>');
    res.send(htmlString); 
})

app.get("/productos", async (req, res) => {
    res.send(await archivo.getAll());
});

app.get("/productoRandom", async (req, res) => {
    res.send(await archivo.getRandom());
});