const Contenedor = require("../utils/Container");
const data = new Contenedor("./src/products.json");

const formView = (req, res) => {
  res.render("form");
};

const productsView = (req, res) => {
  let products = data.getAll();
  res.render("products", { products });
};

const formSubmit = (req, res) => {
  data.save(req.body);
  res.redirect("/productos");
};

module.exports = { formView, productsView, formSubmit };
