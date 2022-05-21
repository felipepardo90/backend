class Usuario {
  constructor(name, lastname, books, pets) {
    this.name = name;
    this.lastname = lastname;
    this.books = books;
    this.pets = pets;
  }

  getFullName() {
    return `Nombre completo: ${this.name} ${this.lastname}`;
  }

  addMascota(pet) {
    this.pets = [...this.pets, pet];
  }

  countMascotas() {
    console.log(`Cantidad de mascotas: ${this.pets.length}`);
    return this.pets.length
  }

  addBook(title, author) {
    this.books = [...this.books, {title, author}];
  }

  getBookNames() {
    let titles = this.books.map(({ title }) => title);
    console.log(`Títulos: ${titles.join('---')}`)
    return titles
  }
}

const usuario = new Usuario(
  "Felipe",
  "Pardo",
  [
    { title: "Rayuela", author: "Julio Cortázar" },
    { title: "El hombre en busca de sentido", author: "Victor Frankl" },
  ],
  ["perro", "gato"]
);
usuario.addMascota("loro");
usuario.addBook("El Túnel", "Ernesto Sábato"
);

console.log(usuario);
console.log(usuario.getFullName());
console.log(usuario.countMascotas());
console.log(usuario.getBookNames());


// let operation = (x, y, operator) =>{
// return operator(x, y)
// }

// let sumar = (x,y)=>{
//   return x + y
// }
// let restar = (x,y)=>{
//   return x - y
// }
// let multiplicar = (x,y)=>{
//   return x * y
// }
// let dividir = (x,y)=>{
//   return x / y
// }
// let modulo = (x,y)=>{
//   return x % y
// }

// console.log(operation(3, 5, sumar))