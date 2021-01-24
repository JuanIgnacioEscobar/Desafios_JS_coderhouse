class zapatilla {
    constructor(marcaZapatilla, nombreZapatilla, precioZapatilla, stockZapatilla){
        this.nombre = nombreZapatilla;
        this.marca = marcaZapatilla;
        this.precio = precioZapatilla;
        this.stock = stockZapatilla;
    }
}
function mostrar (){
    document.getElementById('carrito').innerHTML = `${producto.marca}
    <br>
    ${producto.nombre} <br> 
    Precio: <strong>${producto.precio}</strong><br>
    Stock: ${producto.stock}`; 
}

let producto = new zapatilla('Nike', 'Air Force 1','$20.000', 10)
console.log(producto);