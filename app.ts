console.log("Primera Entrega");

interface libro {
    nombre: string,
    autor: string
  }

class Usuario {
    
  nombre: string;
  apellido: string;
  libros: libro[] = [];
  mascotas: string[] = [];

  public constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  public getFullName(): string {
    return `${this.nombre} ${this.apellido}`;
  }

  public addMascota(mascota: string) {
    this.mascotas.push(mascota);
  }

  public countMascotas(): Number {
    return this.mascotas.length;
  }

  public addBook(nombre: string, autor: string) {
    this.libros.push({nombre, autor});
  }

  public getBookNames(): String[] {

    let listaDeLibros = this.libros.map(libro => libro.nombre) 
    return listaDeLibros
  }
}

const usuario = new Usuario("John", "Doe")
console.log(`El Nombre completo es ${usuario.getFullName()}`)

usuario.addMascota("Perro");
console.log(`Ahora ${usuario.getFullName()} tiene ${usuario.countMascotas()} mascotas`);
usuario.addMascota("Gato");
console.log(`Ahora ${usuario.getFullName()} tiene ${usuario.countMascotas()} mascotas`);
usuario.addMascota("Loro");
console.log(`Ahora ${usuario.getFullName()} tiene ${usuario.countMascotas()} mascotas`);

usuario.addBook('El señor de las moscas', 'William Golding');
console.log(`Lista de Libros: ${usuario.getBookNames()}`)
console.log(usuario.getBookNames())

usuario.addBook('Fundacion', 'Isaac Asimov');
console.log(`Lista de Libros: ${usuario.getBookNames()}`)
console.log(usuario.getBookNames())

usuario.addBook('Martín Fierro', 'José Hernández');
console.log(`Lista de Libros: ${usuario.getBookNames()}`)
console.log(usuario.getBookNames())