"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        if (nombre === void 0) { nombre = "Sin nombre"; }
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = false;
        this.peleasGanadas = 0;
    }
    Avenger.prototype.bio = function () {
        console.log(this.nombre + " pertenece al equipo " + this.equipo + " y su nombre real es " + this.nombreReal);
    };
    Avenger.prototype.name = function () {
        return this.nombreReal;
    };
    Avenger.nombreReal = function () {
        console.log('Nombre real');
    };
    Avenger.padre = "No lo sabemos";
    return Avenger;
}());
var Xmen = (function (_super) {
    __extends(Xmen, _super);
    function Xmen(nombre, equipo, nombreReal) {
        return _super.call(this, nombre, equipo, nombreReal) || this;
    }
    Xmen.prototype.bio = function () {
        return _super.prototype.bio.call(this);
    };
    return Xmen;
}(Avenger));
var antman = new Avenger('Antman', 'Cap', 'Scott Lang');
var ciclope = new Xmen('Ciclope', 'Xmen', 'Scott');
antman.bio();
ciclope.bio();
Avenger.nombreReal();
console.log(antman);
console.log(ciclope);
console.log(Avenger.padre);
