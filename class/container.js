// //CLASE

// class Contenedor {
//   constructor() {
//   }

//   save = async (object) => {
//     // Recibe un objeto, lo guarda en el archivo, devuelve el ID asignado

//     try {
//       const id = products.length + 1;
//       const newProduct = { ...req.body, id };
//       products.push(newProduct);
//       res.json("Saved");
//       return object.id;
//     } catch (err) {
//       console.log(`No se ha podido guardar el objeto: ${err}`);
//     }
//   };

//   getById =  (id) => {
//     //Recibe un ID y devuelve un objeto con ese ID
//     let data = JSON.parse(data);
//     // console.log(arrData, "arrData")
//     let findID = arrData.find(({ id }) => id == numberID);
//     // console.log(findID, "findID")
//     try {
//       findID == undefined
//         ? console.log(null)
//         : console.log(`Producto: ${numberID} => ${findID.title}`);
//     } catch (error) {
//       console.log(`Error en el procesamiento de búsqueda: ${error}`);
//     }

//     return findID;
//   };

//   getAll = async () => {
//     // Devuelve un array con los objetos presentes en el archivo
//     let data = JSON.parse(await fs.promises.readFile(this.filename, "utf-8"));
//     console.log(data, "data")
    

//     return data;
//   };

//   deleteById = async (numberID) => {
//     //Elimina del archivo el objeto con el ID buscado

//     let data = await fs.promises.readFile(this.filename, "utf-8");
//     // console.log(data, "data")
//     let arrData = JSON.parse(data);
//     // console.log(arrData, "arrData")

//     try {
//       let findID = arrData.filter(({ id }) => id != numberID);
//       await fs.promises.writeFile(
//         this.filename,
//         JSON.stringify(findID, null, 2)
//       );
//     } catch (err) {
//       console.log(`No se ha podido borrar el objeto: ${err}`);
//     }
//   };

//   deleteAll = () => {
//     //Elimina todos los objetos presentes en el archivo
//     console.log("Se han eliminado todos los elementos");
//     fs.promises.writeFile(this.filename, "");
//   };
// }

// module.exports = Contenedor