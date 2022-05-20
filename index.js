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

  addMascota(newPet) {
    this.pets = [...this.pets, newPet];
  }

  countMascotas() {
    console.log(`Cantidad de mascotas: ${this.pets.length}`);
  }

  addBook(newTitle, newAutor) {
    this.books = [...this.books, {title: newTitle, autor: newAutor}];
  }

  getBookNames() {
    let titles = this.books.map(({ title }) => title);
    return console.log(`Títulos: ${titles}`)
  }
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
usuario.addMascota("loro");
usuario.addBook("El Túnel", "Ernesto Sábato"
);

console.log(usuario);
console.log(usuario.getFullName());
console.log(usuario.countMascotas());
console.log(usuario.getBookNames());
