const Contenedor = require("../utils/Container");
const data = new Contenedor();


const newCart = (req, res)=>{
    res.json({message: "carrito creado perris"})
}

module.exports = {newCart}