async function cargarVista(nombreVista) {
    const contenedorVista = document.getElementById('contenido-dinamico');
    const barraNavegacion = document.getElementById('naveg-header');
    const logoH = document.getElementById('logo-h');
    const logop = document.getElementById('logo-p');
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
            iniciarVentanas();
        } else {
            contenedorVista.innerText = `404 Vista No Encontrada: ${ruta}`;
            console.error(`Error ${respuesta.status} al cargar: ${ruta}`);
        }
    } catch (err) {
        console.error(`Error al cargar la vista: ${err.message}`);
        contenedorVista.innerText = `Error al cargar la vista`;
    }
}
