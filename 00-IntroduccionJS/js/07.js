//Objects - Join 2 objects

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true,
}

//Pone el contenido dentro del objeto
// const carrito = {
//     cantidad: 1,
//     ...producto // Spread operator
// }

const nuevoObjeto = {
    ...producto,
    ...cliente
}

console.log(nuevoObjeto);

const nuevoObjeto2 = Object.assign(producto, cliente);
console.log(nuevoObjeto2);