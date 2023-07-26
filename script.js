console.log("Curso EDteam - JavaScript Programacion Orientada a Objetos")

//Objetos literales - un objeto es un tipo de dato
//Los objetos literales son los objetos mas basicos.

const nombre = "Beto Quiroga"
const edad = 29;
console.log(typeof nombre) // va a imprimir el tipo de dato que es la variable.
console.log(typeof edad) // imprime number

//
const alumno = {
    nombre: "Beto Junior",
    apellidos: "Quiroga M.",
    edad: 29,
    hermanos: ["Juan", "Maria","Jose"],
    padre:{
        nombre: "Hector Lecuberry",
        edad: 62
    }
} 

console.log(typeof alumno)// imprime object
console.log(alumno) // imprime {nombre: 'Beto Junior', apellido: 'Quiroga M.', edad: 29}

//notacion punto o dot.notation
console.log(alumno.nombre)//imprime un solo dato del onbjeto
console.log(typeof alumno.nombre)// imprime string
console.log(alumno.hermanos)
console.log(typeof alumno.hermanos)

console.log(alumno.padre)//imprime los datos del padre
console.log(alumno.padre.edad)//imprime solo la edad del padre

//Notacion corchete
console.log(alumno["apellidos"])//Imprime Quiroga, solo funciona con strings.


