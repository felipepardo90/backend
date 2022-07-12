const Cart = require("../utils/Cart");
const Producto = require("../utils/Container");


const getAllProductsInCart = (req, res) =>{
    const products = Producto.getAll()
    res.json('products', {products})
}


const newCart = (req, res) => {
res.json(new Cart().getCart())
}

module.exports = {newCart, getAllProductsInCart}