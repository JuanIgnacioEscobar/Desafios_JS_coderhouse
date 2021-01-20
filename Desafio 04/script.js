let boton1 = 1;
let boton2 = 2;
let total = 0;

function imprimir1(){
    total = total + boton1;
    document.getElementById('carrito').innerHTML = `Imprimiste <b>${total}</b> hojas.`
    return(boton1);
}
function imprimir2(){
    total = total + boton2;
    document.getElementById('carrito').innerHTML = `Imprimiste <b>${total}</b> hojas.`
    return(boton2);
}