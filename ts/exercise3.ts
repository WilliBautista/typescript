
// Objetos
interface Batimovil {
  carroceria:string,
  modelo:string,
  antibalas:boolean,
  pasajeros:number,
  disparar?:()=>void
}

let batimovil:Batimovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

let bumblebee:Batimovil = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

// Villanos debe de ser un arreglo de objetos personalizados
interface Villano {
  nombre:string,
  edad:any,
  mutante:boolean
}

let villanos:Villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

interface Charles {
  poder:string,
  estatura:number
}

interface Apocalipsis {
  lider:boolean,
  miembros:string[]
}
// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
let charles:Charles = {
  poder:"psiquico",
  estatura: 1.78
};

let apocalipsis:Apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique:Charles|Apocalipsis;

mystique = charles;
mystique = apocalipsis;
