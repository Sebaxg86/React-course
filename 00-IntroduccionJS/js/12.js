const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript'];

// for(let i = 0; i<tecnologias.length; i++){
//     console.log(tecnologias[i]);
// }

//For each loop
// tecnologias.forEach(function(tech){
//     console.log(tech)
// })

//Map
const arrayMap = tecnologias.map(function(tech){
    return tech
})

//map generates a new array

// For ... of
for(let tech of tecnologias){
    console.log(tech);
}
