// Una función que puede recibir cualquier parametro sin importar su tipo pero de igual manera typescript
// detecta su tipo de dato con "<T>(arg:T"

function regresar<T>(arg:T) {
    return arg;
}

// Pasando cualquier tipo de dato a la función
console.log( regresar('String').toLowerCase() );
console.log( regresar(1997.23423).toFixed(2) );
console.log( new Date().getDate() );
