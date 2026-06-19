const btnHombre = document.getElementById('btn-link-hombre');
const btnInicio = document.getElementById('btn-link-inicio');
const btnMujer = document.getElementById('btn-link-mujer');
const btnBuscar = document.getElementById('btn-buscar');
const btnCarrito = document.getElementById('carrito-btn');

if (btnHombre) {
    btnHombre.addEventListener('click', () => {
        cargarVista('HombrePagina');
    });
}
if (btnInicio) {
    btnInicio.addEventListener('click', () => {
        cargarVista('inicio');
    });
}
if (btnMujer) {
    btnMujer.addEventListener('click', () => {
        cargarVista('mujerPagina');
    });
}
if (btnBuscar) {
    btnBuscar.addEventListener('click', () => {
        cargarVista('productoVista');
    });
}
if (btnCarrito) {
    btnCarrito.addEventListener('click', () => {
        cargarVista('carrito');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarVista('inicio')
});