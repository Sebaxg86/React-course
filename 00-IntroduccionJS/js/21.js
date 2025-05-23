//Ternarios
const auth = true;

const saldo = 1000;
const pagar = 500;
const tarjeta = true;

// auth ? 
//     console.log('Usuario autenticado') : 
//     console.log('No autenticado, ir al login');

saldo > pagar || tarjeta ? 
    console.log("Si puedes pagar") :
    console.log("No puedes pagar");