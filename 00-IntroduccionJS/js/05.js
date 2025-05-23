//Objetos - Manipulación

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

// Evita la modificación del objeto
// Object.freeze(producto);

// No permite añadir ni eliminar propiedades
// Object.seal(producto);

//Reescribir un valor
producto.disponible = false;

//Si no existe una propiedad, lo va a añadir
producto.imagen = 'imagen.jpg'

// Eliminar propiedad
delete producto.precio;

console.log(producto);