//Notacion ES6

const nombre2 = "Beto Jr"
const apellidos2 = "Quiroga M."
const edad2 = 20
const padre2 = {
    nombre: "Hector Lecuberry",
    edad: 62
}

const alumno3 = {
    nombre2,
    apellidos2,
    edad2,
    hermanos: ["Juan", "Maria","Jose"],
    padre2
} 
console.log(alumno3)
alumno3.genero = "Masculino"
alumno3.domicilio = "Queretaro"
alumno3.edad=30
console.log(alumno3)

