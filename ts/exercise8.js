// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}
var batimovil_1 = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... run!!!");
    }
};
// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
// Cree una interfaz para la siguiente funcion
var ciudadGotica = function (ciudadanos) {
    return ciudadanos.length;
};
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
var PersonalInformation = /** @class */ (function () {
    function PersonalInformation(nombre, edad, estadoCivil, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.estadoCivil = estadoCivil;
        this.sexo = sexo;
    }
    PersonalInformation.prototype.imprimirBio = function () {
        console.log(this.nombre + ", su sexo es " + this.sexo + ", tiene " + this.edad + " a\u00F1os de edad y es " + this.estadoCivil);
    };
    return PersonalInformation;
}());
var hombre = new PersonalInformation("William Bautista", 21, "Soltero", "Masculino");
var mujer = new PersonalInformation("Amparo Gutierrez", 44, "Casada", "Femenino");
var indefinido = new PersonalInformation("Alguien por ahí", 28, "Soltero", "indefinido");
console.log(hombre);
hombre.imprimirBio();
console.log(mujer);
mujer.imprimirBio();
console.log(indefinido);
indefinido.imprimirBio();
