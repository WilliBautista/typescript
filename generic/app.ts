// Una función que puede recibir cualquier parametro sin importar su tipo pero de igual manera typescript
// detecta su tipo de dato con "<T>(arg:T"

function regresar<T>(arg:T):T {
    return arg;
}

// Pasando cualquier tipo de dato a la función
console.log( regresar('String').toLowerCase() );
console.log( regresar(1997.23423).toFixed(2) );
console.log( new Date().getDate() );

// Function
function genericFunction<T>( arg:T ):T {
    return arg;
}

type Villain = {
    nombre:string;
    nombreReal:string;
}

interface Heroe {
    nombre:string;
    poder:string;
}

let heroe = {
    nombre: 'Super Man',
    nombreReal: 'Clark Kent',
    poder: 'Super fuerza'
}

console.log( genericFunction<Heroe>( heroe ) );

// Array
let heroes:Array<string> = ["Iron Man", "Capitan America", "Hulk"];
heroes.push("Thor");
console.log(heroes);

let villains:string[] = ["Lex Lutor", "Flash reverso"];
villains.push("Lucky");
console.log(villains);

// Clases
class Cuadrado<T extends number|string> {
    base:T;
    altura:T;
    area():number {
        return +this.base * +this.altura;
    };
}

let cuadrado = new Cuadrado<number|string>();

cuadrado.base = 20;
cuadrado.altura = "10";
console.log( cuadrado.area() );
