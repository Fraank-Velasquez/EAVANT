const btnHombre = document.getElementById('btn-link-hombre');
const btnInicio = document.getElementById('btn-link-inicio');
const btnMujer = document.getElementById('btn-link-mujer')

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