const express = require("express");
const productosRoute = require("./routes/productos");
const app = express();
const path = require('path')

// settings
app.set("json spaces", 2)
app.set('views', path.join(__dirname, './views') )
app.set('view engine', 'pug')

// middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/html', express.static('html'))

// routes
app.use("/api/productos", productosRoute)

// starting server

const server = app.listen(8080, () => {
  console.log(
    `Servidor HTTP conectado, escuchando en el puerto ${server.address().port}`
  );
});
server.on("error", (error) => console.log(`Error en servidor: ${error}`));
