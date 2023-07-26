//Asignacion de atributos
//Los attributos internos de un objeto pueden ser modificados.

const alumno2 = {
    nombre: "Beto Junior",
    apellidos: "Quiroga M.",
    edad: 29,
    hermanos: ["Juan", "Maria","Jose"],
    padre:{
        nombre: "Hector Lecuberry",
        edad: 62
    }
} 
console.log(alumno2)
alumno2.genero = "Masculino"
alumno2.domicilio = "Queretaro"
alumno2.edad=30
console.log(alumno2)