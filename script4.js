const usuario1 = {
    //atributos del objeto
    nombre: "Juan Gabriel",
    apellidos: "Magan H",
    edad:4,
    correo: "juang@ed.team",
    activo: true,
    //Metodos del objeto
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`)
    }
}

console.log(usuario1)

const usuario2 = {
    //atributos del objeto
    nombre: "Alexys",
    apellidos: "Lozada",
    edad:4,
    correo: "alexys@ed.team",
    activo: true,
    //Metodos del objeto
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`)
    }
}

console.log(usuario2)

//Funcion constructora, la funcion se escribe con mayuscula en la primer letra y en singular
function Usuario(nombres, apellidos, correo, activo) {
    this.nombres = nombres,
    this.apellidos = apellidos,
    this.correo = correo,
    this.activo = activo


}
//la palabra reservada new nos permite confirmar que Usuario es una funcion constructora
const beto = new Usuario ("Beto", "Quiroga", "Correo", true)
const alexys = new Usuario ("Alexys","Lozada", "alexys@ed.team",true)

console.log(beto)
console.log(alexys)

// Ahora como se usa la nomenclatura de clases

class Usuario2 {
    constructor(nombres, apellidos, correo, activo) {
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.correo = correo,
        this.activo = activo
    }
}

const beto2 = new Usuario2 ("Beto", "Quiroga", "Correo", true)
const alexys2 = new Usuario2 ("Alexys","Lozada", "alexys@ed.team",true)

// beto2 y alexis2 son instancias de la clase Usuario2
console.log(beto2)
console.log(alexys2)

//Metodos dentro de una clase, se declaran detro del constructor.


class Usuario3 {
    constructor(nombres, apellidos, correo, activo) {
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.correo = correo,
        this.activo = activo
    }
    presentarse(){
        console.log(`Hola, soy ${this.nombres} y mi correo es: ${this.correo}`)
    }
    getNombres(){
        return this.nombres
    }
    getApellidos(){
        return this.apellidos
    }
    setApellidos(nuevosApellidos){
        this.apellidos = nuevosApellidos
    }
}
const diego = new Usuario3("Diego","Jimenez", "djp@gmail.com", true)
console.log(diego)
console.log(diego.presentarse())
console.log(diego.getApellidos())
console.log(`${diego.getNombres()} ${diego.getApellidos()}`)

diego.setApellidos("Jimenez Perez")
console.log(`${diego.nombres} ${diego.apellidos}`)
//Metodos getters y los setters
//Get -> Obtener
//Set -> Dar


