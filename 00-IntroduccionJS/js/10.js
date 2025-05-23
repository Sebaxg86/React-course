const tecnologias = ['HTML', 'CSS', 'Javascript', 'React.js', 'Node.js'];
// tecnologias.push("Nest.js");

const nuevoArreglo = [...tecnologias, 'Nest.js'];
console.table(tecnologias);

console.table(nuevoArreglo);

tecnologias.shift();
console.table(tecnologias);


// const tecnologias2 = tecnologias.filter(function(tech){
//     if(tech === 'HTML'){
//         return tech;
//     }
// });

const tecnologias2 = tecnologias.map(function(tech){
    if(tech === 'Node.js'){
        return 'Nest.js';
    }else{
        return tech;
    }
});

console.log(tecnologias2);