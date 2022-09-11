console.log("Primera Entrega");
var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido) {
        this.libros = [];
        this.mascotas = [];
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Usuario.prototype.getFullName = function () {
        return "".concat(this.nombre, " ").concat(this.apellido);
    };
    Usuario.prototype.addMascota = function (mascota) {
        this.mascotas.push(mascota);
    };
    Usuario.prototype.countMascotas = function () {
        return this.mascotas.length;
    };
    Usuario.prototype.addBook = function (nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor });
    };
    Usuario.prototype.getBookNames = function () {
        var listaDeLibros = this.libros.map(function (libro) { return libro.nombre; });
        return listaDeLibros;
    };
    return Usuario;
}());
var usuario = new Usuario("John", "Doe");
console.log("El Nombre completo es ".concat(usuario.getFullName()));
usuario.addMascota("Perro");
console.log("Ahora ".concat(usuario.getFullName(), " tiene ").concat(usuario.countMascotas(), " mascotas"));
usuario.addMascota("Gato");
console.log("Ahora ".concat(usuario.getFullName(), " tiene ").concat(usuario.countMascotas(), " mascotas"));
usuario.addMascota("Loro");
console.log("Ahora ".concat(usuario.getFullName(), " tiene ").concat(usuario.countMascotas(), " mascotas"));
usuario.addBook('El señor de las moscas', 'William Golding');
console.log("Lista de Libros: ".concat(usuario.getBookNames()));
console.log(usuario.getBookNames());
usuario.addBook('Fundacion', 'Isaac Asimov');
console.log("Lista de Libros: ".concat(usuario.getBookNames()));
console.log(usuario.getBookNames());
usuario.addBook('Martín Fierro', 'José Hernández');
console.log("Lista de Libros: ".concat(usuario.getBookNames()));
console.log(usuario.getBookNames());
