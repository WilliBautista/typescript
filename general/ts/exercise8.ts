// Crear interfaces
interface Auto {
    encender:boolean;
    velocidadMaxima:number;
    acelerar():void;
}

interface Guason {
    reir:boolean;
    comer?:boolean;
    llorar?:boolean;
}

interface CiudadGotica {
    ( ciudadanos:string[] ):number
}

interface PersonalData {
    nombre:string;
    edad:number;
    sexo?:string;
    estadoCivil:string;
    imprimirBio():void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto:Auto):void {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}

let batimovil_1:Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... run!!!");
    }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

let guason:Guason = {
    reir: true,
    comer: true,
    llorar: false
}

function reir(guason:Guason):void {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}


// Cree una interfaz para la siguiente funcion
let ciudadGotica:CiudadGotica = function(ciudadanos: string[]):number {
    return ciudadanos.length;
}

  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

class PersonalInformation implements PersonalData {

    constructor(
        public nombre:string,
        public edad:number,
        public estadoCivil:string,
        public sexo:string
    ) {}

    imprimirBio() {
        console.log(`${ this.nombre }, su sexo es ${ this.sexo }, tiene ${ this.edad } años de edad y es ${ this.estadoCivil }`);
    }
}

let hombre = new PersonalInformation("William Bautista", 21, "Soltero", "Masculino");
let mujer = new PersonalInformation("Amparo Gutierrez", 44, "Casada", "Femenino");
let indefinido = new PersonalInformation("Alguien por ahí", 28, "Soltero", "indefinido");

console.log(hombre);
hombre.imprimirBio();
console.log(mujer);
mujer.imprimirBio();
console.log(indefinido);
indefinido.imprimirBio();
