const fs = require("fs");

// SERVIDOR //
const express = require("express");
const app = express();

const server = app.listen(8080, () => {
  console.log(
    `Servidor HTTP conectado, escuchando en el puerto ${server.address().port}`
  );
});

server.on("error", (error) => console.log(`Error en servidor: ${error}`));

// CLASE //

class Contenedor {
  constructor(filename) {
    this.filename = filename;
    fs.promises.writeFile(filename, "[]");
  }
  save = async (object) => {
    //Recibe un objeto, lo guarda en el archivo, devuelve el ID asignado
    let data = await fs.promises.readFile(this.filename, "utf-8");
    let arrData = JSON.parse(data);

    app.get("/", (req, res) => {
      res.send(
        '<h1 style="color:blue">Bienvenidos al servidor express</h1><br><a href="http://localhost:8080/productoRandom"><button>Producto Random</button><a> <a href="http://localhost:8080/productos"><button>Productos</button></a>'
      );
    });

    try {
      arrData = [...arrData, object];
      object.id = arrData.length;
      await fs.promises.writeFile(
        this.filename,
        JSON.stringify(arrData, null, 2)
      );
      return object.id;
    } catch (err) {
      console.log(`No se ha podido guardar el objeto: ${err}`);
    }
  };

  getById = async (numberID) => {
    //Recibe un ID y devuelve un objeto con ese ID, o null si no está
    let data = await fs.promises.readFile(this.filename, "utf-8");
    // console.log(data, "data")
    let arrData = JSON.parse(data);
    // console.log(arrData, "arrData")
    let findID = arrData.find(({ id }) => id == numberID);
    // console.log(findID, "findID")
    try {
      findID == undefined
        ? console.log(null)
        : console.log(`Producto: ${numberID} => ${findID.title}`);
    } catch (error) {
      console.log(`Error en el procesamiento de búsqueda: ${error}`);
    }

    return findID;
  };

  getAll = async () => {
    //Devuelve un array con los objetos presentes en el archivo
    let data = await fs.promises.readFile(this.filename, "utf-8");
    // console.log(data, "data")
    let arrData = JSON.parse(data);
    // console.log(arrData, "arrData");

    app.get("/productos", (req, res) => {
      let productosNombre = arrData.map(({ title }) => title);
      // console.log(productosNombre, "productosNombre")
      res.send(
        "<h1><span style='color:blue'>Los productos disponibles son</span>: " +
          productosNombre.join(", ") +
          "</h1><br><a href='http://localhost:8080/'><button>Volver</button><a>" 
      );
    });

    app.get("/productoRandom", (req, res) => {
      let random = Math.random() * arrData.length;
      let numbRandom = Math.floor(random);

      console.log(random, numbRandom);
      res.send(`<h1 style="color:green">Producto: ${arrData[numbRandom].title}</h1><br>
      <h1>Precio: $${arrData[numbRandom].price}</h1><br>
      <img src="${arrData[numbRandom].thumbnail}" alt="Producto" style="max-width:200px; max-height:200px" /><br>
      <a href='http://localhost:8080/'><button style="margin-top: 10px">Volver</button><a><a href='http://localhost:8080/productoRandom'><button>RANDOM</button><a>
      `);
    });

    return arrData;
  };

  deleteById = async (numberID) => {
    //Elimina del archivo el objeto con el ID buscado

    let data = await fs.promises.readFile(this.filename, "utf-8");
    // console.log(data, "data")
    let arrData = JSON.parse(data);
    // console.log(arrData, "arrData")

    try {
      let findID = arrData.filter(({ id }) => id != numberID);
      await fs.promises.writeFile(
        this.filename,
        JSON.stringify(findID, null, 2)
      );
    } catch (err) {
      console.log(`No se ha podido guardar el objeto: ${err}`);
    }
  };

  deleteAll = () => {
    //Elimina todos los objetos presentes en el archivo
    console.log("Se han eliminado todos los elementos");
    fs.promises.writeFile(this.filename, "");
  };
}

const file = new Contenedor("./products.json");

const saveFunction = async () => {
  await file.save({
    title: "Vino",
    price: "300",
    thumbnail:
      "https://th.bing.com/th/id/OIP.g0ixKaeB_bc4CXJec1Kc9gHaEo?pid=ImgDet&rs=1",
  });

  await file.save({
    title: "Jugo natural",
    price: "200",
    thumbnail:
      "https://milrecetas.net/wp-content/uploads/2015/09/Jugos-Naturales-Recetas-1-scaled.jpg",
  });

  await file.save({
    title: "Cerveza",
    price: "350",
    thumbnail:
      "https://th.bing.com/th/id/OIP.Vm-hXlw_CUVzu5f_yhG4aAHaEU?pid=ImgDet&rs=1",
  });

  await file.save({
    title: "Agua mineral",
    price: "150",
    thumbnail:
      "https://www.hhg5.com/wp-content/uploads/2016/07/Qual-a-quantidade-de-%C3%A1gua-ideal-que-devo-beber1.jpg",
  });

  await file.save({
    title: "Licor",
    price: "270",
    thumbnail:
      "https://th.bing.com/th/id/OIP.HrQ-h1J1qoz8FO71R-9UDgHaHa?pid=ImgDet&rs=1",
  });

  // await file.getById(6);

  await file.getAll();

  // await file.deleteById(2);

  // await file.deleteAll(); /* DESCOMENTAR PARA HACER QUE FUNCIONE */
};

saveFunction();
