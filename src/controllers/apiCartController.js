const Contenedor = require("../api/container");
const data = new Contenedor();


const newCart = (req, res)=>{
    res.json({message: "carrito creado perris"})
}

module.exports = {newCart}