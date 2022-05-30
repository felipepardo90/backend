const fs = require("fs");

class Contenedor {
  constructor(filename) {
    fs.writeFileSync(filename, "[]");
    this.filename = filename;
    this.id = 0;
  }
  save = (object) => {
    //Recibe un objeto, lo guarda en el archivo, devuelve el ID asignado
    this.id++;
    object.id = this.id;
    fs.readFile(this.filename, "utf-8", (err, data) => {
      if (err) {
        console.log(`No se puede leer el archivo: ${err}`);
      } else {
        let parseData = JSON.parse(data);
        // parseData.push(object)
        parseData = [...parseData, object];
        console.log("data", parseData);
      }
    });

    console.log(
      `se ha asignado el siguiente id único para su producto: ${this.id}`
    );
    return this.id;
  };

  //   getById = (number) => {
  //     //Recibe un ID y devuelve un objeto con ese ID, o null si no está
  //     number ? products.id : null;
  //   };

  // getAll = () => {
  //   //Devuelve un array con los objetos presentes en el archivo
  //   fs.readFile(`${this.filename}`, (error, data) => {
  //     error
  //       ? console.log(`Se ha producido el siguiente error: ${error}`)
  //       : console.log(
  //           JSON.parse(data).map(
  //             (value) => `
  //       id:${value.id},
  //       title:${value.title},
  //       price:${value.price}, `
  //           )
  //         );
  //   });
  // };

  // deleteById = (number) => {
  //   //Elimina del archivo el objeto con el ID buscado

  //   let route = `${this.filename}`;
  //   let rawdata = fs.readFile(route, "utf-8", (error) =>
  //     console.log(`Se ha producido un error en RAWDATA: ${error}`)
  //   );
  //   let dataCollection = JSON.parse(rawdata);
  // };

  //   deleteAll=()=>{
  //     //Elimina todos los objetos presentes en el archivo
  //   }
}

const file = new Contenedor("./products.json");

file.save({
  title: "Vino",
  price: "300",
  thumbnail:
    "https://th.bing.com/th/id/OIP.im0JpPU66JTk_Tv4v6uASQHaE7?pid=ImgDet&rs=1",
  // title: "jugo natural",
  // price: "200",
  // thumbnail:
  //   "https://th.bing.com/th/id/R.5a9c261f9e3737fa248429c4aa93c5d3?rik=475xNgV2Jg0MQg&riu=http%3a%2f%2fpirapolitica.com%2fwp-content%2fuploads%2f2019%2f10%2fel-jugo-de-naranja.jpg&ehk=7W1hS%2fYlYo8qlYNukWgHh%2biPmyQwUcnGu0uXsLhYoe8%3d&risl=&pid=ImgRaw&r=0",
});

// file.getAll();

// file.deleteById(1);
