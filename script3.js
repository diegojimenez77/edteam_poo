//Los objetos tienen Atributos y metodos
//Atributos = Nombre, Apellidos, Edad, Padre
//Metodos = Lo que puede hacer el objeto, Que capacidades tiene el objeto.
//Metodos = niño.presentarse niño.decir quien es su padre

const nino = {
    //atributos del objeto
    nombre: "Juan Gabriel",
    apellidos: "Magan H",
    edad:4,
    padre:{
        nombre: "Juan Camanay",
        edad: 69
    },
    //Metodos del objeto
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`)
    },
    quienEsTuPadre(){
        console.log(`Mi padre es ${this.padre.nombre}`)
    }
}
nino.presentarse()
nino.quienEsTuPadre()