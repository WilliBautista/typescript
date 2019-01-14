class Avenger {

    private puedePelear:boolean = false;
    private peleasGanadas:number = 0;

    static padre:string = "No lo sabemos";

    constructor(
        public nombre:string = "Sin nombre",
        protected equipo:string,
        private nombreReal:string
    ){}

    bio():void {
        console.log(`${ this.nombre } pertenece al equipo ${ this.equipo } y su nombre real es ${ this.nombreReal }`);
    }

    name():string {
        return this.nombreReal;
    }

    static nombreReal() {
        console.log('Nombre real');
    }
}

class Xmen extends Avenger {
    constructor(nombre:string, equipo:string, nombreReal:string) {
        super(nombre, equipo, nombreReal);
    }

    bio():any {
        return super.bio();
    }
}

let antman = new Avenger('Antman', 'Cap', 'Scott Lang');
let ciclope = new Xmen('Ciclope', 'Xmen', 'Scott');

antman.bio();
ciclope.bio();
Avenger.nombreReal();

console.log(antman);
console.log(ciclope);
console.log(Avenger.padre);
