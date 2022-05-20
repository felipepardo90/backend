class Usuario {
  constructor(name, lastname, books, pets) {
    this.name = name;
    this.lastname = lastname;
    this.books = books;
    this.pets = pets;
  }

  getFullName = function () {
    return `Nombre completo: ${this.name} ${this.lastname}`;
  };

  addMascota = function (newMascota = "loro") {
    this.pets.push(newMascota);
    return this.pets;
  };

  countMascotas = function () {
    return this.pets.length;
  };

  addBook = function (
    newBook = {
      title: "El Túnel",
      autor: "Ernesto Sábato",
    }
  ) {
    this.books.push(newBook);
    return this.books;
  };

  getBookNames = function () {
    const titleBooks = this.books.map(({ title }) => title);
    return titleBooks;
  };
}

const usuario = new Usuario(
  "Felipe",
  "Pardo",
  [
    { title: "Rayuela", autor: "Julio Cortázar" },
    { title: "El hombre en busca de sentido", autor: "Victor Frankl" },
  ],
  ["perro", "gato"]
);

console.log(usuario.getFullName())
console.log(usuario.addMascota())
console.log(usuario.countMascotas())
console.log(usuario.addBook())
console.log(usuario.getBookNames())
;
