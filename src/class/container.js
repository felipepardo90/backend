// const products = require("../products.json");

class Contenedor {
  constructor() {
    this.products = require("../products.json");
  }

  save = async (object) => {
    // Recibe un objeto, lo guarda en el archivo, devuelve el ID asignado

    try {
      const id = products.length + 1;
      const newProduct = { ...req.body, id };
      products.push(newProduct);
      res.json("Saved");
      return object.id;
    } catch (err) {
      console.log(`No se ha podido guardar el objeto: ${err}`);
    }
  };

  getById = (clientId) => {
    let data = this.products.find(({ id }) => id == clientId);
    try {
      data == undefined && null;
    } catch (error) {
      console.log(`Error en el procesamiento de búsqueda: ${error}`);
    }

    return data;
  };

  getAll = () => {
    // Devuelve un array con los objetos presentes en el archivo

    return this.products;
  };

  deleteById = (clientId) => {
    //Elimina del archivo el objeto con el ID buscado

    try {
      let data = this.products.filter(({ id }) => id != clientId);
      return data;
    } catch (err) {
      console.log(`No se ha podido borrar el objeto: ${err}`);
    }
  };
}

module.exports = Contenedor;

const container = new Contenedor();

console.log(container.deleteById(3));
