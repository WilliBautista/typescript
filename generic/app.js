"use strict";
function regresar(arg) {
    return arg;
}
console.log(regresar('String').toLowerCase());
console.log(regresar(1997.23423).toFixed(2));
console.log(new Date().getDate());
function genericFunction(arg) {
    return arg;
}
var heroe = {
    nombre: 'Super Man',
    nombreReal: 'Clark Kent',
    poder: 'Super fuerza'
};
console.log(genericFunction(heroe));
var heroes = ["Iron Man", "Capitan America", "Hulk"];
heroes.push("Thor");
console.log(heroes);
var villains = ["Lex Lutor", "Flash reverso"];
villains.push("Lucky");
console.log(villains);
var Cuadrado = (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura;
    };
    ;
    return Cuadrado;
}());
var cuadrado = new Cuadrado();
cuadrado.base = 20;
cuadrado.altura = "10";
console.log(cuadrado.area());
