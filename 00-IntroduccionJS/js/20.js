const saldo = 1000;
const pagar = 500;
const tarjeta = true;

//Logical Or y Logical And
// || Or - Al menos una se cumple
// && And - Revisa que todas se cumplen

if(saldo > pagar || tarjeta){
    console.log('Puedes pagar');
}else{
    console.log('No puedes pagar');
}