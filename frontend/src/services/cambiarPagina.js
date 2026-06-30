async function cargarVista(nombreVista) {
    const contenedorVista = document.getElementById('contenido-dinamico');
    const barraNavegacion = document.getElementById('naveg-header');
    const logoH = document.getElementById('logo-h');
    const logop = document.getElementById('logo-p');
    const btnBuscar = document.getElementById('btn-buscar');
    const panelBusqueda = document.getElementById('panel-busqueda');

    // Cerrar buscador si se cambia de vista
    if (panelBusqueda) {
        panelBusqueda.classList.remove('panel-busqueda-visible');
    }

    try {
        const ruta = '../pages/' + nombreVista + '.html';
        const respuesta = await fetch(ruta);
        if (respuesta.ok) {
            const htmlGenerado = await respuesta.text();
            contenedorVista.innerHTML = htmlGenerado;

            barraNavegacion.classList.remove('naveg-header-inicio', 'naveg-header-otros');
            logoH.classList.remove('logo-nav-h-negro');
            logop.classList.remove('logo-nav-p-negro');

            if (nombreVista === 'inicio') {
                barraNavegacion.classList.add('naveg-header-inicio');
            } else {
                barraNavegacion.classList.add('naveg-header-otros');
                logoH.classList.add('logo-nav-h-negro');
                logop.classList.add('logo-nav-p-negro');
            }

            // Ocultar/mostrar el botón de búsqueda. Solo visible en Hombre y Mujer
            if (btnBuscar) {
                if (nombreVista === 'HombrePagina' || nombreVista === 'mujerPagina') {
                    btnBuscar.style.display = 'block';
                } else {
                    btnBuscar.style.display = 'none';
                }
            }

            // Inicializar animaciones base
            iniciarVentanas();

            // Disparar lógica específica de la vista cargada si existe su función
            if (nombreVista === 'inicio' && typeof inicializarInicio === 'function') {
                inicializarInicio();
            } else if (nombreVista === 'HombrePagina' && typeof inicializarCatalogo === 'function') {
                inicializarCatalogo('hombre');
            } else if (nombreVista === 'mujerPagina' && typeof inicializarCatalogo === 'function') {
                inicializarCatalogo('mujer');
            } else if (nombreVista === 'productoVista' && typeof inicializarProductoVista === 'function') {
                inicializarProductoVista();
            } else if (nombreVista === 'carrito' && typeof inicializarCarrito === 'function') {
                inicializarCarrito();
            }
        } else {
            contenedorVista.innerText = `404 Vista No Encontrada: ${ruta}`;
            console.error(`Error ${respuesta.status} al cargar: ${ruta}`);
        }
    } catch (err) {
        console.error(`Error al cargar la vista: ${err.message}`);
        contenedorVista.innerText = `Error al cargar la vista`;
    }
}

