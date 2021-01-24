let Nike = [' Air force', ' Air max', 'React'];
let Adidas = [' Yeezys', ' Superstars', ' Ozweego'];
let Puma = [' XT WNS', ' RS-2K', ' RS-X3'];
let todasLasMarcas = Nike.concat(Adidas, Puma);

function marca1() {
    document.getElementById('carrito').innerHTML = `<b>${Nike}</b>`
}
function marca2() {
    document.getElementById('carrito').innerHTML = `<b>${Adidas}</b>`
}
function marca3(){
    document.getElementById('carrito').innerHTML = `<b>${Puma}</b>`
}
function marca4(){
    document.getElementById('carrito').innerHTML = `<b>${todasLasMarcas}</b>`
}