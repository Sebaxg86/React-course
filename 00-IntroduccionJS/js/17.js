const tecnologias = ['HTML','CSS','JavaScript','React.js','Node.js'];
const numeros = [10,20,30];

//Filter
const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML');

console.log(nuevoArray);

// //Includes
// const resultado = tecnologias.includes('CSS')
// console.log(resultado);

// Some - Devuelve si almenos uno cumple la condicion
// const resultado = numeros.some(numeros => numero < 15);

// Find - Devuelve el primer elemento que cumple una funcion
// const resultado = numeros.find(numero => numero > 15);

// Every - Retorna true o false si todos cumplen la condición
// const resultado = numeros.every(numero => numero > 5);

// Reduce - Retorna un acumulado del total
const resultado = numeros.reduce((total, numero) => total + numero, 0)

console.log(resultado);

