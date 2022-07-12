const fs = require("fs");

class Contenedor {
  constructor() {
    this.products = require("../db/products.json");
  }

  save = (object) => {
    // recibe un objeto, le asigna un ID y lo guarda en el archivo

    if (object.title && object.price && object.thumbnail) {
      try {
        object.id = this.products.length + 1;
        this.products.push(object);
        const json_products = JSON.stringify(this.products, null, " ");
        fs.writeFileSync("src/products.json", json_products, "utf-8");
        return object;
      } catch (err) {
        console.log(`Error en save: ${err}`);
      }
    }
  };

  update = (object, clientId) => {
    // actualiza un objecto según el ID

    let updatedData = this.products.findIndex(({ id }) => id == clientId);
  
    if (updatedData == -1) {
      return null;
    }
    try {
      object.id = +clientId;
      this.products[updatedData] = object;
      const json_products = JSON.stringify(this.products, null, " ");
      console.log(json_products);
      fs.writeFileSync("src/products.json", json_products, "utf-8");
      return object;
    } catch (error) {
      console.log(`Error en update: ${err}`);
    }
  };

  getById = (clientId) => {
    // obtiene el producto con el ID proporcionado por el cliente

    let data = this.products.find(({ id }) => id == clientId);
    if (data) {
      try {
        return data;
      } catch (error) {
        console.log(`Error en getById: ${error}`);
      }
    }
  };

  getAll = () => {
    // devuelve un array con los objetos presentes en el archivo

    try {
      return this.products;
    } catch (error) {
      console.log(`Error en getAll: ${error}`);
    }
  };

  deleteById = (clientId) => {
    // elimina del archivo el objeto con el ID buscado
    try {
      let data = this.products.findIndex(({ id }) => id == clientId);
      this.products.splice(data, 1);
      let json_products = JSON.stringify(this.products, null, " ");
      fs.writeFileSync("src/products.json", json_products, "utf-8");
      return this.products;
    } catch (err) {
      console.log(`Error en deleteById: ${err}`);
    }
  };
}

module.exports = Contenedor;

// const container = new Contenedor();

// console.log(
//   container.update(
//     {
//       title: "Submarino",
//       price: 300,
//       thumbnail:
//         "https://www.recetas-argentinas.com/base/stock/Recipe/280-image/280-image_web.jpg",
//     },
//     3
//   )
// );
