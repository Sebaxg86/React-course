// Objetos
// Un objeto es una colección de propiedades y métodos

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

console.log(producto);
console.log(typeof(producto)); // object
console.table(producto); // Muestra el objeto en una tabla

console.log(producto.nombre); // Acceder a la propiedad nombre

//Destructuración de objetos
//const {nombre} = producto
const {nombre,precio,disponible} = producto;
console.log(nombre); // Acceder a la propiedad nombre
console.log(precio); // Acceder a la propiedad precio
console.log(disponible); // Acceder a la propiedad disponible

// Oject literal enhancement
const autenticado = true;
const usuario = 'Juan';

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto); // {autenticado: true, usuario: "Juan"