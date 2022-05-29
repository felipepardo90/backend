// class Usuario {
//   constructor(name, lastname, books, pets) {
//     this.name = name;
//     this.lastname = lastname;
//     this.books = books;
//     this.pets = pets;
//   }

//   getFullName = () => `Nombre completo: ${this.name} ${this.lastname}`;

//   addMascota = (pet) => (this.pets = [...this.pets, pet]);

//   countMascotas = () => {
//     console.log(`Cantidad de mascotas: ${this.pets.length}`);
//     return this.pets.length;
//   };

//   addBook = (title, author) =>
//     (this.books = [...this.books, { title, author }]);

//   getBookNames = () => {
//     let titles = this.books.map(({ title }) => title);
//     console.log(`Títulos: ${titles.join(" --- ")}`);
//     return titles;
//   };
// }

// const usuario = new Usuario(
//   "Felipe",
//   "Pardo",
//   [
//     { title: "Rayuela", author: "Julio Cortázar" },
//     { title: "El hombre en busca de sentido", author: "Victor Frankl" },
//   ],
//   ["perro", "gato"]
// );
// usuario.addMascota("loro");
// usuario.addBook("El Túnel", "Ernesto Sábato");

// console.log(usuario);
// console.log(usuario.getFullName());
// console.log(usuario.countMascotas());
// console.log(usuario.getBookNames());

// let operation = (x, y, operator) => operator(x, y);

// let sumar = (x, y) => x + y;
// let restar = (x, y) => x - y;
// let multiplicar = (x, y) => x * y;
// let dividir = (x, y) => x / y;
// let modulo = (x, y) => x % y;

// console.log(operation(3, 5, sumar));

// const fin = () => console.log("terminé");
// const mostrarLetras = (word, cb) => {
//   let i = 0;

//   let charCounter = setInterval(() => {
//     console.log(word[i++]);
//     if (i === word.length) {
//       clearInterval(charCounter);
//       cb();
//     }
//   }, 1000);
// };

// mostrarLetras("¡Hola!", fin);

// const fs = require("fs");

// const myArray = [
//   { ciudad: "Salta", población: 10000 },
//   { ciudad: "Tartagal", población: 5000 },
//   { ciudad: "Gral Güemes", población: 2000 },
// ];

// fs.mkdir("./ciudades", (error) => {
//   error
//     ? console.log(`hubo un error ${error} `)
//     : console.log("la carpeta ciudades se creo correctamente");
// });

// fs.writeFile("./ciudades/ciudades.txt", JSON.stringify(myArray), (error) => {
//   error
//     ? console.log(`hubo un error ${error} `)
//     : console.log("el archivo ciudades se creo correctamente");
// });

// fs.readFile("./ciudades/ciudades.txt", (error, data) => {
//   if (error) {
//     console.log(`hubo un error ${error} `);
//   } else {
//     const log = JSON.parse(data).map((value) => {
//       return `
//         Ciudad: ${value.ciudad}
//         Población: ${value.población}`;
//     });
//     console.log(log);
//   }
// });

const fs = require("fs");

class Contenedor {
  constructor(filename) {
    this.filename = filename;
  }
  // save = (object) => {

  //   //Recibe un objeto, lo guarda en el archivo, devuelve el ID asignado
  //   let route = `${this.filename}`
  //   let data = JSON.stringify(object)
  //   fs.appendFile(route, data, (error) => {
  //     error
  //       ? console.log(`Se ha producido un error en appendFile: ${error}`)
  //       : console.log(`el objeto ${data} se ha almacenado correctamente`);
  //   })
    
  //   console.log(
  //     `se ha asignado el siguiente id único para su producto: ${object.id}`
  //   );
  //   return object.id;
  // };

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

    deleteById =(number)=>{
      //Elimina del archivo el objeto con el ID buscado
      
      let route = `${this.filename}`
      let rawdata = fs.readFile(route, "utf-8", error=>console.log(`Se ha producido un error en RAWDATA: ${error}`))
      let dataCollection = JSON.parse(rawdata)

      

    }

  //   deleteAll=()=>{
  //     //Elimina todos los objetos presentes en el archivo
  //   }
}

const file = new Contenedor("./products.json");

// file.save({
//   title: "jugo natural",
//   price: "200",
//   thumbnail:
//     "https://th.bing.com/th/id/R.5a9c261f9e3737fa248429c4aa93c5d3?rik=475xNgV2Jg0MQg&riu=http%3a%2f%2fpirapolitica.com%2fwp-content%2fuploads%2f2019%2f10%2fel-jugo-de-naranja.jpg&ehk=7W1hS%2fYlYo8qlYNukWgHh%2biPmyQwUcnGu0uXsLhYoe8%3d&risl=&pid=ImgRaw&r=0",
// });

// file.getAll();

file.deleteById(1)
