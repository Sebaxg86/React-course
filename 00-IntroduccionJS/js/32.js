// Eventos del DOM - Submit
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;

    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta','text-white','uppercase','text-sm','text-center','p-2','font-black');

    //Prevenir nuevas alertas
    const alertaPrevia = document.querySelector('.alerta');
    alertaPrevia?.remove();


    if(nombre === '' || password === ''){
        alerta.textContent = 'Todos los campos son obligatorios';
        alerta.classList.add('bg-red-500');
    }else{
        alerta.textContent = 'Todo bien iniciando sesion';
        alerta.classList.add('bg-green-500');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove()
    }, 3000);
});