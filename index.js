const fs = require("fs");

class Contenedor {
  constructor(filename) {
    this.filename = filename;
    fs.promises.writeFile(filename, "[]");
  }
  save = async (object) => {
    //Recibe un objeto, lo guarda en el archivo, devuelve el ID asignado
    let data = await fs.promises.readFile(this.filename, "utf-8");
    let arrData = JSON.parse(data);

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
        ?  console.log(null)
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
    console.log(arrData, "arrData")
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
    fs.promises.writeFile(this.filename, "");
  };
}

const file = new Contenedor("./products.json");

const saveFunction = async () => {
  await file.save({
    title: "Vino",
    price: "300",
    thumbnail: "foto-vino",
  });

  await file.save({
    title: "jugo natural",
    price: "200",
    thumbnail: "foto-jugo",
  });

  await file.save({
    title: "Cerveza",
    price: "350",
    thumbnail: "foto-cerveza",
  });

  await file.save({
    title: "Agua mineral",
    price: "150",
    thumbnail: "foto-awita",
  });

  // await file.getById(6);

  // await file.getAll();

  // await file.deleteById(4);

  // await file.deleteAll(); /* DESCOMENTAR PARA HACER QUE FUNCIONE */
};

saveFunction();
