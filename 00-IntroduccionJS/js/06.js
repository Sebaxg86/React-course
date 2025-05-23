//Objects - Destructuring de 2 o mas objetos

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true,
    direccion: {
        calle: "Calle México"
    }
}

const {nombre} = producto;
const {nombre: nombreCliente, direccion: {calle}} = cliente;

console.log(nombre);
console.log(nombreCliente);

console.log(calle);