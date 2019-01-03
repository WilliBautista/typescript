// Basic functions
let person:string = "William";

const return_name = ():string => person

const greet = ():string => `Hello ${ person }`

console.log('---------------- Basic functions');
console.log(return_name());
console.log(greet());


// Required parameters of the functions
const full_name = (name:string, lastname:string):string => `${name} ${ lastname }`

console.log('---------------- Required parameters of the functions');
console.log(full_name("William", "Bautista"));

// Optional parameters of the functions
const full_data = (name:string, lastname:string, age?:number):string => {
    let salute:string = `Hello ${name} ${lastname} `;

    if (age) salute += `you're ${ age } years old`

    return salute;
}

console.log('---------------- Optional parameters of the functions');
console.log(full_data("William", "Bautista", 21));
console.log(full_data("William", "Bautista"));

// Default parameters of the functions
const anime = (name:string, anime:boolean = true, type?:string):string => {
    let message:string = `${ name } is an anime character`;

    if (!anime) message = `${ name } is not an anime character, but is ${ type }`;

    return message;
}

console.log('---------------- Default parameters of the functions');
console.log(anime("Goku"));
console.log(anime("William", false, "a developer"));

// Rest parameters of the functions
const characters = (...names:string[]):string => `Marvel's characters: ${ names.join(', ') }`

console.log('---------------- Rest parameters of the functions');
console.log(characters("Iron Man", "Hulk", "Captain America", "Thor"));

// Function type
const sum = (a:number, b:number):number => a + b

const salute = (name:string):string => `Hello ${ name }, how're you?`

const saveWorld = ():void => console.log('The world was saved!!')

let sum1: (a:number, b:number) => number = sum,
    salute1: (name:string) => string = salute,
    saveWorld1: () => void = saveWorld;

console.log('---------------- Function type');
console.log(sum1(10, 60));
console.log(salute1("William"));
saveWorld1();

// Objects with interfaces
interface Young {
    name:string,
    age:number,
    skills:string[],
    getData:()=>string
}

let young:Young = {
    name: 'William Bautista',
    age: 21,
    skills: ['JavaScript', 'TypeScript', 'Angular', 'Css', 'Html5'],
    getData: function() {
        return `${ this.name } tiene ${ this.age } y sabe ${ this.skills.join(', ') }`
    }
}

console.log('---------------- Objects with interfaces');
console.log(young.getData());

// Multiple types allowed
let anything:string|number|boolean;

anything = true;
anything = 25;
anything = "string";

console.log('---------------- Multiple types allowed');
console.log(anything);

