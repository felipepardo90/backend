const { Router } = require("express");
const { send } = require("express/lib/response");
const router = Router(); //Router
const products = require("../products.json");

// SERVER

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  let data = products.find(item=>item.id == id)
  if (!data){
    res.json({error:"producto no encontrado"})
  }
  res.json(data)
});

router.post("/", (req, res) => {
  const { title, price, thumbnail } = req.body;
  if (title && price && thumbnail) {
    try {
      const id = products.length + 1;
      const newProduct = { ...req.body, id };
      products.push(newProduct);
      res.json("Saved");
      return products.id;
    } catch (err) {
      console.log(`No se ha podido guardar el objeto: ${err}`);
    }
  } else {
    res.send("Complete los datos restantes");
  }
  res.status(500).send("Producto cargado exitosamente");
});

router.put("/:id",  (req, res) => {
  const { id } = req.params;
  const updatedProduct = products.find(item=>item.id == id)
  console.log(updatedProduct)
  const { title, price, thumbnail } = req.body;
  if (title && price && thumbnail) {
    try {
      updatedProduct = { ...req.body};
      products.push(updatedProduct);
      res.json("Saved");
      return products.id;
    } catch (err) {
      console.log(`No se ha podido guardar el objeto put: ${err}`);
    }
  } 
  res.status(500).send("Producto actualizado exitosamente");
 
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let data = products.filter(item => item.id != id);
  if (!data){
    res.json({error:"producto no encontrado"})
  }
  res.json(data).send("Producto eliminado");
});

module.exports = router;
