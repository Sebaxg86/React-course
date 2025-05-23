// Opcional Chaining (?)
const alumno = {
    nombre: 'Juan',
    clase: 'Programación 1',
    aprobado: true,
    examenes: {
        examen1: 90
    }
}

console.log(alumno.examenes?.examen1);

console.log('Despues de ALUMNO');


// Nullish coalescing operator (??)
// Retorna el operando del lado derecho cuando el izquierdo es null o undefined
const pagina = null ?? 1;
console.log(pagina);