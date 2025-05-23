const tecnologias = ['HTML','CSS','JavaScript','React.js','Node.js'];
const numeros = [10,20,30];

//Filter
const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML');

console.log(nuevoArray);

//Includes
const resultado = tecnologias.includes('CSS')
console.log(resultado);
