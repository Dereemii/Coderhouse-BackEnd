class Usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = [mascotas]
    }

    getFullName = () => {
        console.log(`mi nombre es ${this.nombre + this.apellido}`)
    }
    addMascota = (mascota) => {
        this.mascotas.push(mascota);
    }
    countMascotas = () => {
        console.log(`${this.mascotas.length}`)
    }
    addBook = (nombre, autor) => {
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }
    getBookNames = () => {
        console.log(this.libros.map(libros => libros.nombre))
    }
}

const persona1 = new Usuario("Elon", "Musk", "gato")
persona1.getFullName()

persona1.addMascota('perro')
console.log(persona1.mascotas)

persona1.countMascotas()

persona1.addBook('El señor de los anillos', 'J RR Tolkien')
persona1.addBook('Libro falso', 'fakeautor')
console.log(persona1.libros)

persona1.getBookNames()