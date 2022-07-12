const Cart = require("../utils/Cart");
const Producto = require("../utils/Container");

const getAllProductsInCart = (req, res) => {
  const products = Producto.getAll();
  res.json("products", { products });
};

const newCart = (req, res) => {
  let producto = Producto.save(req.body);
  if (!producto) {
    res.json({ message: "El carrito está vacío" });
  }
  res.render("cart", {
    cart: Cart.save(producto),
    pageTitle: "Nuevo producto",
  });
};

module.exports = { newCart, getAllProductsInCart };
