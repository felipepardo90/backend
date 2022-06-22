const { Router } = require("express");
const router = Router(); //Router
const products = require('../products.json');

// métodos
const Contenedor = require('../class/container')
const file = new Contenedor()

// get all products

router.get("/", (req, res) => {
  let data = file.getAll()
  if (!data) {
    res.json({ error: "no hay productos" });
  }
  res.json(data);
});

// get product by id

router.get("/:id", (req, res) => {

  let data = file.getById(req.params.id)
  if (!data) {
    res.json({ error: "producto no encontrado" });
  }
  res.json(data);
});

// post

router.post("/", (req, res) => {
  const { title, price, thumbnail } = req.body;
  if (title && price && thumbnail) {
    try {
      const id = products.length + 1;
      const newProduct = { ...req.body, id };
      products.push(newProduct);
      res.status(500).send("Producto cargado exitosamente")
      return products.id;
    } catch (err) {
      console.log(`No se ha podido guardar el objeto: ${err}`);
    }
  } else {
    res.status(400).send("Complete los campos restantes");
  }
  
});

// put

router.put("/:id", (req, res) => {
  const { id } = req.params;
  let data = products.findIndex((item) => item.id == id);
  if (data != -1) {
    req.body.id = id;
    products[data] = req.body;

    res.json(products[data]);
  }
  res.json({ error: "producto no encontrado" });
});

// delete

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let data = products.filter((item) => item.id != id);
  if (!data) {
    res.json({ error: "producto no encontrado" });
  }
  res.json(data).send("Producto eliminado");
});

module.exports = router;
