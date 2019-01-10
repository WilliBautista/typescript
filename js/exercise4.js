// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT


// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";

// Declaracion de variables?
let spiderman = "Peter Parker",
    spiderBlack = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099","Spider-Girl","Ultimate Spider-Man"],
    [ spiderman2099, spidergirl, ultimate ] = versiones;

// Destructuracion de objetos?
let malandros = {
        venom: "Eddie Brock",
        carnage: "Cletus Kasady",
        sandman: "William Baker"
    },
    { carnage, sandman, venom } = malandros;

console.log(venom, carnage, sandman);
    
// Ciclo for Of?
for (const version of versiones) {
    console.log(version);
}
