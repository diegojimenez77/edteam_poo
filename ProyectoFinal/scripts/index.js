import Curso from "./classes/Curso.js"
import Profesor from "./classes/Profesor.js"
import Alumno from "./classes/Alumno.js"
//Instanciando objetos de la clase curso
// const html = new Curso("HTML desde cero", "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F927f5294-45af-4593-a52f-f437bf16d811.png&w=640&q=75", 10)
// const css = new Curso("CSS desde cero", "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F82daef93-44b7-4a0a-9910-42aa609c6eee.png&w=640&q=75", 8)
// const javascript = new Curso("JavaScript desd0e cero", "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F1fc49db5-2454-43e5-b94b-bed0d98719f2.png&w=640&q=75", 8)

const elem = document.getElementById("cursos")

//Imprime un curso en el DOM
//Recibe un objeto de tipo Curso
function mostrarCurso(curso) {
    const hijo = document.createElement("div")
        hijo.classList.add("card")
        hijo.innerHTML = `
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-0 s-center">${curso.getNombre()}</h3>
            <div class="s-center">
                <span class="small">Clases: ${curso.getClasses()}</span>
            </div>
        </div>
        `
    elem.appendChild(hijo)
}

const elem2 = document.getElementById("alumnos")
function mostrarAlumno(alumno) {
    const hijo = document.createElement("div")
        hijo.innerHTML = `
        <div>
            <h2>${alumno.getNombre()}</h2>
            <h2>${alumno.getApellidos()}</h2>
            <h2>${alumno.getCorreo()}</h2>
            <h2>${alumno.getActivo()}</h2>
        </div>
        `
    elem2.appendChild(hijo)
}

const formularioC = document.getElementById("formCursos")
formularioC.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarCurso(curso)
})

const formularioA = document.getElementById("formAlumnos")
formularioA.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const alumno = new Alumno(target.nombresAlumno.value, target.apellidosAlumno.value, target.correoAlumno.value, target.activoAlumno.value)
    console.log(alumno)
    mostrarAlumno(alumno)
})

const profe = new Profesor("Beto", "Quiroga", "beto@ed.team", true, ["React", "Drupal"])
console.log(profe);

const alumno1 = new Alumno("Juanito", "Perez", "juan@ed.team", false, ["HTML", "CSS"])
const alumno2 = new Alumno("Maria", "Rodriguez", "mariar@ed.team", true, ["Drupal", "JS"])
console.log(alumno1);

const html = new Curso ("HTML desde cero", "mi-poster.png", 7)

html.setInscritos([...html.getInscritos(),alumno1])
console.log(html)

html.setInscritos([...html.getInscritos(),alumno2])
console.log(html)