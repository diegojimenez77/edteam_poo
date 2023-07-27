class Usuario {
    constructor(nombres, apellidos, correo, activo){
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

//Herencia = Heredar ciertos atributos de una clase anteriormente definida, para eso se usa extends Usuario quiere decir que es una extension 
// del constructor Usuario y hereda sus atributos
// super() le da los atributos definidos de Usuario

class Profesor extends Usuario {
    constructor (n, a, c, ac, cursosDictados, calificacion){
        super(n, a, c, ac)
        this.cursosDictados = cursosDictados
        this.calificacion = calificacion
}
}

class Alumno extends Usuario {
    constructor (n, a, c, ac, cursosTomados){
        super(n, a, c, ac)
        this.cursosTomados = cursosTomados
}
}

const beto = new Alumno("Beto", "Quiroga", "beto@ed.team", true, ["HTML", "Drupal"]) //Instancia de la clase Usuario
const alexys = new Profesor("Alexys", "Lozada", "alexys@ed.team", true, ["BD", "Java"], 10)
console.log(Alumno)
console.log(Profesor)
console.log(beto)
console.log(alexys)
console.log(alexys.presentarse())// tambien hereda todos los metodos que tiene la clase Usuario.


//Resumen de conceptos
//Abstraccion - es poder entender algo del mundo real y llevarlo a codigo, por ejemplo un Usuario, un Alumno, un Profesor y los atributos que tiene cada uno de ellos.
//Objetos - son esa abstaccion llevada a codigo que tienen atributos y metodos
//Atributos - son las cualidades y el listado de cosas que el objeto tiene.
//Metodos - son las capacidades que van a tener los objetos como decir su nombre, presentarse.
//Funcion constructora - es un molde por medio del cual se pueden crear objetos mas rapidamente sin repetir codigo.
//Clases - Son el conepto ya ejecutando programacion orientada a objetos.
//Metodo constructor - similar a la funcion constructora pero es un metodo que tiene la clase y puede ser heredado.
//Metodos getters y setters - Los get son para obtener informacin, setters cambian o actualizan la informacion de un atributo.
//Herencia - capacidad que tienen las clases para poder extenderse.
//super() - el metodo super recibe los atributos de la clase que se esta extendiendo.
