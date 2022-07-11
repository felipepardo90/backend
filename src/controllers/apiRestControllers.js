const Contenedor = require("../utils/Container");
const file = new Contenedor();

const getAll = (req, res) => {
  let products = file.getAll();
  res.json(products);
};

const getProductById = (req, res) => {
  let data = file.getById(req.params.id);
  if (!data) {
    res.json({ error: "producto no encontrado" });
  }
  res.json(data);
};

const postProduct = (req, res) => {
  let data = file.save(req.body);
  if (!data){
    res.json({error: "se deben completar todos los campos"})
  }
  res.json(data);
};

const putProduct = (req, res) => {
  let data = file.update(req.body, req.params.id);
  if (!data){
    res.json({error: "se deben completar todos los campos"})
  }
  res.json({message:`el producto ${req.params.id} se ha modificado exitosamente`});
};

const deleteProduct = (req, res) => {
  let data = file.deleteById(req.params.id);
  if (!data) {
    res.json({ error: "producto no encontrado" });
  }
  res.json({message:`producto ${req.params.id} eliminado`});
};

module.exports = {
  getAll,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
};
