function iniciarVentanas() {
    const mostrarFiltros = document.getElementById('contenedorFiltros');
    const btnMostrarFiltros = document.getElementById('btnAbrirFiltros');

    if (btnMostrarFiltros && mostrarFiltros) {
        btnMostrarFiltros.addEventListener('click', () => {
            mostrarFiltros.classList.toggle('contendor-no-visible');
            mostrarFiltros.classList.toggle('cf-activo');
        });
    }
}

/* Lógica del Sistema de Detalle AVANT */

// 1. Cambio de imágenes
function changeProductImage(imageUrl, buttonElement) {
    document.getElementById('main-product-image').src = imageUrl;

    // Quitar clase active de las demás miniaturas
    const thumbnails = document.querySelectorAll('.avant-thumbnail-btn');
    thumbnails.forEach(btn => btn.classList.remove('active'));

    // Agregar al botón presionado
    buttonElement.classList.add('active');
}

// 2. Selección de Tallas
function selectProductSize(buttonElement) {
    const sizeButtons = document.querySelectorAll('.avant-size-btn');
    sizeButtons.forEach(btn => btn.classList.remove('active'));

    buttonElement.classList.add('active');
}

// 3. Acordeones Puros sin librerías
function toggleAccordion(accordionId) {
    const selectedAccordion = document.getElementById(accordionId);
    const parentItem = selectedAccordion.parentElement;

    // Verificar si ya está abierto
    const isOpen = parentItem.classList.contains('active');

    // Cerrar todos los acordeones para mantener el minimalismo
    const allContainers = document.querySelectorAll('.avant-accordion-content');
    const allItems = document.querySelectorAll('.avant-accordion-item');

    allContainers.forEach(container => container.style.maxHeight = null);
    allItems.forEach(item => item.classList.remove('active'));

    // Si no estaba abierto, lo abrimos
    if (!isOpen) {
        parentItem.classList.add('active');
        // Asignar el scrollHeight para ejecutar la animación CSS fluidamente
        selectedAccordion.style.maxHeight = selectedAccordion.scrollHeight + "px";
    }
}

// Seleccionamos todos los encabezados del acordeón
const encabezados = document.querySelectorAll('.encabezado-acordeon');

encabezados.forEach(encabezado => {
    encabezado.addEventListener('click', function () {
        const contenido = this.nextElementSibling;
        const estaVisible = contenido.style.display === 'block';

        // Alternar visibilidad
        contenido.style.display = estaVisible ? 'none' : 'block';

        // Cambiar el signo
        this.querySelector('span').textContent = estaVisible ? '+' : '-';
    });
});