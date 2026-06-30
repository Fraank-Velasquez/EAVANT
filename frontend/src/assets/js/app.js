// Lógica principal de EAVANT - app.js

// Función global para redireccionar al detalle de un producto
window.verDetalleProducto = function (id) {
    localStorage.setItem('productoSeleccionadoId', id);
    cargarVista('productoVista');
};

// ==================== 1. PANEL DE BÚSQUEDA (Estilo Prada/LV) ====================
document.addEventListener('DOMContentLoaded', () => {
    const btnBuscar = document.getElementById('btn-buscar');
    const btnCerrarBusqueda = document.getElementById('btn-cerrar-busqueda');
    const panelBusqueda = document.getElementById('panel-busqueda');
    const inputBusqueda = document.getElementById('input-busqueda');
    const contenedorResultados = document.getElementById('contenedor-resultados-busqueda');

    if (btnBuscar && panelBusqueda) {
        btnBuscar.addEventListener('click', (e) => {
            e.preventDefault();
            panelBusqueda.classList.add('panel-busqueda-visible');
            if (inputBusqueda) {
                inputBusqueda.value = '';
                inputBusqueda.focus();
            }
            if (contenedorResultados) {
                contenedorResultados.innerHTML = '<div class="mensaje-busqueda-vacia">Escribe algo para buscar...</div>';
            }
        });
    }

    if (btnCerrarBusqueda && panelBusqueda) {
        btnCerrarBusqueda.addEventListener('click', () => {
            panelBusqueda.classList.remove('panel-busqueda-visible');
        });
    }

    if (inputBusqueda && contenedorResultados) {
        inputBusqueda.addEventListener('input', () => {
            const query = inputBusqueda.value.trim().toLowerCase();
            if (query.length < 2) {
                contenedorResultados.innerHTML = '<div class="mensaje-busqueda-vacia">Escribe al menos 2 caracteres...</div>';
                return;
            }

            // Filtrar productos
            const resultados = window.PRODUCTOS.filter(producto => {
                return producto.nombre.toLowerCase().includes(query) ||
                    producto.descripcion.toLowerCase().includes(query) ||
                    producto.categoria.toLowerCase().includes(query) ||
                    producto.coleccion.toLowerCase().includes(query);
            });

            contenedorResultados.innerHTML = '';

            if (resultados.length === 0) {
                contenedorResultados.innerHTML = '<div class="mensaje-busqueda-vacia">No se encontraron piezas para tu búsqueda</div>';
                return;
            }

            // Renderizar usando la plantilla
            resultados.forEach(producto => {
                const tarjeta = crearTarjetaProducto(producto);
                contenedorResultados.appendChild(tarjeta);
            });
        });
    }
});

// Helper para crear tarjeta de producto utilizando la etiqueta <template>
window.crearTarjetaProducto = function (producto) {
    const plantilla = document.getElementById('plantilla-tarjeta-producto');
    if (!plantilla) {
        console.error("Plantilla de tarjeta no encontrada");
        return document.createElement('div');
    }

    const clon = plantilla.content.cloneNode(true);
    const tarjeta = clon.querySelector('.tarjeta-producto');
    const img = clon.querySelector('.producto-imagen');
    const coleccionSpan = clon.querySelector('.producto-coleccion');
    const precioSpan = clon.querySelector('.producto-precio');
    const nombreSpan = clon.querySelector('.producto-nombre');
    const btnAgregar = clon.querySelector('.btn-agregar-tarjeta');

    if (img) {
        img.src = producto.imagenPrincipal;
        img.alt = producto.nombre;
    }
    if (coleccionSpan) coleccionSpan.textContent = producto.coleccion;
    if (precioSpan) precioSpan.textContent = `S/. ${producto.precio.toFixed(2)}`;
    if (nombreSpan) nombreSpan.textContent = producto.nombre;

    // Al clickear la tarjeta, ver el detalle
    tarjeta.addEventListener('click', (e) => {
        if (e.target.closest('.btn-agregar-tarjeta')) return; // Evitar disparar si se da click al botón de agregar
        window.verDetalleProducto(producto.id);
    });

    // Acción de añadir rápido al carrito
    if (btnAgregar) {
        btnAgregar.addEventListener('click', (e) => {
            e.stopPropagation();
            const tallaDefault = producto.tallas[0] || 'S';
            const colorDefault = producto.colores[0] || 'NEGRO';
            if (typeof agregarAlCarrito === 'function') {
                agregarAlCarrito(producto.id, tallaDefault, colorDefault, 1);
            }
        });
    }

    return tarjeta;
};


// ==================== 2. INICIALIZADOR DE INICIO ====================
window.inicializarInicio = function () {
    // Redirección de botones de categorías grandes
    const seccionCategorias = document.querySelector('.categorias-seccion');
    if (seccionCategorias) {
        const botones = seccionCategorias.querySelectorAll('.cs-btn');
        if (botones.length >= 2) {
            botones[0].addEventListener('click', () => cargarVista('HombrePagina'));
            botones[1].addEventListener('click', () => cargarVista('mujerPagina'));
        }
    }

    // Redirección de "Nuevas Piezas" destacadas
    const piezasInicio = document.querySelectorAll('.nuevo-seccion .pieza-item');
    // Mapeo manual de las 4 prendas de inicio al ID en la base de datos
    const idsPrendasInicio = ["h2", "m10", "h3", "m1", "h1", "m2"];
    piezasInicio.forEach((pieza, indice) => {
        const idMap = idsPrendasInicio[indice] || "h1";
        // Asignar evento click
        pieza.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            window.verDetalleProducto(idMap);
        });

        // Configurar botón añadir
        const btnAdd = pieza.querySelector('.imagen-contenedor button');
        if (btnAdd) {
            // Reemplazar comportamiento estático
            const nuevoBtn = btnAdd.cloneNode(true);
            btnAdd.parentNode.replaceChild(nuevoBtn, btnAdd);
            nuevoBtn.addEventListener('click', (ev) => {
                ev.stopPropagation();
                const prod = window.PRODUCTOS.find(p => p.id === idMap) || window.PRODUCTOS[0];
                const tallaDefault = prod.tallas[0] || 'S';
                const colorDefault = prod.colores[0] || 'NEGRO';
                if (typeof agregarAlCarrito === 'function') {
                    agregarAlCarrito(idMap, tallaDefault, colorDefault, 1);
                }
            });
        }
    });
};


// ==================== 3. INICIALIZADOR DE CATÁLOGO (Hombre / Mujer) ====================
window.inicializarCatalogo = function (categoria) {
    const contenedorTarjetas = document.querySelector('.tarjetas-productos');
    const centinela = document.getElementById('centinela-paginacion');
    const sidebarFiltros = document.getElementById('contenedorFiltros');
    const btnLimpiar = document.querySelector('.limpiar-filtros-btn');

    let productosFiltrados = window.PRODUCTOS.filter(p => p.categoria === categoria);
    let itemsCargados = 0;
    const limitePagina = 15;
    let observerPagina = null;

    // Función para renderizar una tanda de productos
    function cargarSiguientePagina() {
        if (!contenedorTarjetas) return;
        const totalProductos = productosFiltrados.length;
        const finIndex = Math.min(itemsCargados + limitePagina, totalProductos);

        if (itemsCargados >= totalProductos) {
            if (centinela) centinela.style.display = 'none';
            return;
        }

        const productosAVisualizar = productosFiltrados.slice(itemsCargados, finIndex);
        productosAVisualizar.forEach(prod => {
            const tarjeta = window.crearTarjetaProducto(prod);
            contenedorTarjetas.appendChild(tarjeta);
        });

        itemsCargados = finIndex;

        if (itemsCargados >= totalProductos) {
            if (centinela) centinela.style.display = 'none';
            if (observerPagina && centinela) observerPagina.unobserve(centinela);
        } else {
            if (centinela) centinela.style.display = 'flex';
        }
    }

    // Configurar IntersectionObserver para Paginación Infinita por Scroll
    function configurarScrollInfinito() {
        if (!centinela) return;

        if (observerPagina) {
            observerPagina.disconnect();
        }

        observerPagina = new IntersectionObserver((entradas) => {
            if (entradas[0].isIntersecting) {
                cargarSiguientePagina();
            }
        }, { rootMargin: '150px' });

        observerPagina.observe(centinela);
    }

    // Lógica para aplicar filtros de la barra lateral
    function aplicarFiltros() {
        if (!sidebarFiltros) return;

        // Obtener checkboxes seleccionados por grupo
        const obtenerSeleccionados = (selectorSummary) => {
            const details = Array.from(sidebarFiltros.querySelectorAll('details'));
            const targetDetails = details.find(d => d.querySelector('summary').textContent.includes(selectorSummary));
            if (!targetDetails) return [];
            return Array.from(targetDetails.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.parentElement.textContent.trim().toLowerCase());
        };

        const categoriasSeleccionadas = obtenerSeleccionados('Categoría');
        const tallasSeleccionadas = obtenerSeleccionados('Talla');
        const marcasSeleccionadas = obtenerSeleccionados('Marca');
        const coloresSeleccionados = obtenerSeleccionados('Color');
        const materialesSeleccionados = obtenerSeleccionados('Material');
        const preciosSeleccionados = obtenerSeleccionados('Precio');

        // Filtrar del arreglo principal
        productosFiltrados = window.PRODUCTOS.filter(p => {
            // Validar categoría hombre/mujer
            if (p.categoria !== categoria) return false;

            // Validar filtro de categoría de prenda (pantalón, camisa, etc.)
            if (categoriasSeleccionadas.length > 0) {
                const nombreL = p.nombre.toLowerCase();
                const coincidencia = categoriasSeleccionadas.some(cat => {
                    if (cat === 'pantalones') return nombreL.includes('pantalón') || nombreL.includes('pantalon');
                    if (cat === 'camisas') return nombreL.includes('camisa');
                    if (cat === 'polos') return nombreL.includes('polo');
                    if (cat === 'conjuntos') return nombreL.includes('conjunto');
                    if (cat === 'vestidos') return nombreL.includes('vestido');
                    if (cat === 'blusas') return nombreL.includes('blusa');
                    return false;
                });
                if (!coincidencia) return false;
            }

            // Validar Tallas
            if (tallasSeleccionadas.length > 0) {
                const tieneTalla = p.tallas.some(t => tallasSeleccionadas.includes(t.toLowerCase()));
                if (!tieneTalla) return false;
            }

            // Validar Marcas
            if (marcasSeleccionadas.length > 0) {
                if (!marcasSeleccionadas.includes(p.marca.toLowerCase())) return false;
            }

            // Validar Colores
            if (coloresSeleccionados.length > 0) {
                const tieneColor = p.colores.some(c => coloresSeleccionados.includes(c.toLowerCase()));
                if (!tieneColor) return false;
            }

            // Validar Materiales
            if (materialesSeleccionados.length > 0) {
                const tieneMaterial = p.materiales.some(m => materialesSeleccionados.includes(m.toLowerCase()));
                if (!tieneMaterial) return false;
            }

            // Validar Rangos de Precio
            if (preciosSeleccionados.length > 0) {
                const cumplePrecio = preciosSeleccionados.some(rango => {
                    if (rango.includes('hasta s/50')) return p.precio <= 50;
                    if (rango.includes('s/50 - s/100')) return p.precio > 50 && p.precio <= 100;
                    if (rango.includes('s/100 - s/250')) return p.precio > 100 && p.precio <= 250;
                    if (rango.includes('s/250 - s/500')) return p.precio > 250 && p.precio <= 500;
                    if (rango.includes('s/500 - s/1000')) return p.precio > 500 && p.precio <= 1000;
                    return false;
                });
                if (!cumplePrecio) return false;
            }

            return true;
        });

        // Limpiar contenedor y reiniciar conteos
        if (contenedorTarjetas) contenedorTarjetas.innerHTML = '';
        itemsCargados = 0;

        if (productosFiltrados.length === 0) {
            if (contenedorTarjetas) {
                contenedorTarjetas.innerHTML = '<div class="mensaje-busqueda-vacia" style="grid-column: 1/-1;">No hay piezas que coincidan con los filtros seleccionados</div>';
            }
            if (centinela) centinela.style.display = 'none';
            if (observerPagina && centinela) observerPagina.unobserve(centinela);
        } else {
            cargarSiguientePagina();
            configurarScrollInfinito();
        }
    }

    // Vincular eventos change a los inputs de filtros
    if (sidebarFiltros) {
        const checkboxes = sidebarFiltros.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => {
            cb.addEventListener('change', aplicarFiltros);
        });
    }

    // Vincular botón limpiar filtros
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', () => {
            if (sidebarFiltros) {
                const checkboxes = sidebarFiltros.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(cb => cb.checked = false);
            }
            aplicarFiltros();
        });
    }

    // Inicializar primer render y scroll
    if (contenedorTarjetas) contenedorTarjetas.innerHTML = '';
    cargarSiguientePagina();
    configurarScrollInfinito();
};


// ==================== 4. INICIALIZADOR DE DETALLE DE PRODUCTO ====================
window.inicializarProductoVista = function () {
    const id = localStorage.getItem('productoSeleccionadoId') || "h1";
    const producto = window.PRODUCTOS.find(p => p.id === id) || window.PRODUCTOS[0];

    // Cargar datos estáticos en el DOM
    const mainImg = document.getElementById('main-product-image');
    if (mainImg) {
        mainImg.src = producto.imagenPrincipal;
        mainImg.alt = producto.nombre;
    }

    const colTag = document.querySelector('.avant-coleccion-tag');
    if (colTag) colTag.textContent = `${producto.coleccion} • EAVANT`;

    const nombreH1 = document.querySelector('.avant-nombre-producto');
    if (nombreH1) nombreH1.textContent = producto.nombre;

    const precioP = document.querySelector('.avant-precio');
    if (precioP) precioP.textContent = `S/. ${producto.precio.toFixed(2)}`;

    const descP = document.querySelector('.avant-descripcion-corta');
    if (descP) descP.textContent = producto.descripcion;

    // Renderizar Miniaturas
    const thumbnailsCont = document.querySelector('.avant-thumbnails');
    if (thumbnailsCont) {
        thumbnailsCont.innerHTML = '';

        // Agregar la imagen principal como primera miniatura
        const arrayMinis = [producto.imagenPrincipal, ...(producto.imagenesMiniatura || [])].filter(url => url !== "");

        arrayMinis.forEach((url, i) => {
            const btn = document.createElement('button');
            btn.className = `avant-thumbnail-btn ${i === 0 ? 'active' : ''}`;
            btn.innerHTML = `<img src="${url}" alt="Vista miniatura ${i + 1}">`;
            btn.addEventListener('click', function () {
                if (mainImg) mainImg.src = url;
                thumbnailsCont.querySelectorAll('.avant-thumbnail-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
            thumbnailsCont.appendChild(btn);
        });
    }

    // Selector de Tallas Dinámico
    const tallasGrid = document.querySelector('.avant-tallas-grid');
    let tallaSeleccionada = '';

    if (tallasGrid) {
        tallasGrid.innerHTML = '';
        producto.tallas.forEach((talla, index) => {
            const btn = document.createElement('button');
            btn.className = 'avant-size-btn';
            btn.textContent = talla;

            // Revisar stock por talla
            const stockTalla = producto.stock && producto.stock[talla] !== undefined ? producto.stock[talla] : 5;
            if (stockTalla === 0) {
                btn.classList.add('avant-size-agotado');
                btn.disabled = true;
                btn.title = "Agotado";
            } else {
                // Seleccionar por defecto la primera disponible
                if (!tallaSeleccionada) {
                    tallaSeleccionada = talla;
                    btn.classList.add('active');
                }
                btn.addEventListener('click', () => {
                    tallasGrid.querySelectorAll('.avant-size-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    tallaSeleccionada = talla;
                });
            }
            tallasGrid.appendChild(btn);
        });
    }

    // Acordeones: Rellenar textos dinámicos
    const descAccordionContent = document.getElementById('desc-accordion');
    if (descAccordionContent) {
        const inner = descAccordionContent.querySelector('.avant-accordion-inner');
        if (inner) {
            let htmlDesc = `<p>${producto.descripcionDetallada}</p>`;
            if (producto.materialesDetalle && producto.materialesDetalle.length > 0) {
                htmlDesc += `<ul class="avant-materiales-lista">`;
                producto.materialesDetalle.forEach(item => {
                    htmlDesc += `<li>${item}</li>`;
                });
                htmlDesc += `</ul>`;
            }
            inner.innerHTML = htmlDesc;
        }
    }

    // Guía de Tallas (Modal Genérico)
    const btnGuiaTallas = document.querySelector('.avant-guia-tallas-btn');
    let overlayModal = document.getElementById('modal-tallas-overlay');

    // Crear el modal dinámicamente si no existe en la vista de producto cargada
    if (!overlayModal) {
        overlayModal = document.createElement('div');
        overlayModal.id = 'modal-tallas-overlay';
        overlayModal.className = 'modal-tallas-overlay';
        overlayModal.innerHTML = `
            <div class="modal-tallas-cuerpo">
                <button class="btn-cerrar-modal">&times;</button>
                <h3>Guía de Tallas General</h3>
                <p>Nuestras prendas de alta costura se ajustan a las siguientes medidas corporales estándar en centímetros (cm).</p>
                <table class="tabla-guia-tallas">
                    <thead>
                        <tr>
                            <th>Talla</th>
                            <th>Pecho (cm)</th>
                            <th>Cintura (cm)</th>
                            <th>Cadera (cm)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XS</td>
                            <td>80 - 84</td>
                            <td>62 - 66</td>
                            <td>86 - 90</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>84 - 88</td>
                            <td>66 - 70</td>
                            <td>90 - 94</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>88 - 92</td>
                            <td>70 - 74</td>
                            <td>94 - 98</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>92 - 96</td>
                            <td>74 - 78</td>
                            <td>98 - 102</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>96 - 100</td>
                            <td>78 - 82</td>
                            <td>102 - 106</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
        document.body.appendChild(overlayModal);

        // Vincular cierre del modal
        const btnCerrar = overlayModal.querySelector('.btn-cerrar-modal');
        btnCerrar.addEventListener('click', () => {
            overlayModal.classList.remove('modal-activo');
        });
        overlayModal.addEventListener('click', (e) => {
            if (e.target === overlayModal) {
                overlayModal.classList.remove('modal-activo');
            }
        });
    }

    if (btnGuiaTallas) {
        btnGuiaTallas.addEventListener('click', () => {
            if (overlayModal) overlayModal.classList.add('modal-activo');
        });
    }

    // Botón Agregar al Carrito
    const btnAgregarCarrito = document.querySelector('.avant-btn-agregar');
    if (btnAgregarCarrito) {
        btnAgregarCarrito.addEventListener('click', () => {
            if (!tallaSeleccionada) {
                alert("Por favor seleccione una talla antes de añadir al carrito.");
                return;
            }
            const colorDefault = producto.colores[0] || 'NEGRO';
            if (typeof agregarAlCarrito === 'function') {
                agregarAlCarrito(producto.id, tallaSeleccionada, colorDefault, 1);

                // Confirmación visual premium en botón
                const originalHTML = btnAgregarCarrito.innerHTML;
                btnAgregarCarrito.innerHTML = "✓ AÑADIDO AL CARRITO";
                btnAgregarCarrito.style.background = "#2e7d32";
                btnAgregarCarrito.disabled = true;

                setTimeout(() => {
                    btnAgregarCarrito.innerHTML = originalHTML;
                    btnAgregarCarrito.style.background = "";
                    btnAgregarCarrito.disabled = false;
                }, 1500);
            }
        });
    }

    // Productos Relacionados (por color, categoría o colección)
    const contenedorRelacionados = document.getElementById('contenedor-relacionados-carrusel');
    const btnIzq = document.getElementById('btn-carrusel-izq');
    const btnDer = document.getElementById('btn-carrusel-der');

    if (contenedorRelacionados) {
        contenedorRelacionados.innerHTML = '';

        // Filtrar productos relacionados
        const relacionados = window.PRODUCTOS.filter(p => {
            if (p.id === producto.id) return false; // excluir actual

            const mismoColor = p.colores.some(c => producto.colores.includes(c));
            const mismaColeccion = p.coleccion === producto.coleccion;
            const mismaCat = p.categoria === producto.categoria;

            return mismoColor || mismaColeccion || mismaCat;
        }).slice(0, 10); // Límite de 10 recomendados

        if (relacionados.length === 0) {
            const seccionR = document.querySelector('.avant-relacionados');
            if (seccionR) seccionR.style.display = 'none';
        } else {
            relacionados.forEach(prod => {
                const tarjeta = window.crearTarjetaProducto(prod);
                contenedorRelacionados.appendChild(tarjeta);
            });
        }
    }

    // Manejar controles de desplazamiento del carrusel
    if (btnIzq && contenedorRelacionados) {
        btnIzq.addEventListener('click', () => {
            contenedorRelacionados.scrollBy({ left: -320, behavior: 'smooth' });
        });
    }
    if (btnDer && contenedorRelacionados) {
        btnDer.addEventListener('click', () => {
            contenedorRelacionados.scrollBy({ left: 320, behavior: 'smooth' });
        });
    }
};

// ==================== 5. ENLACES DE CABECERA Y NAVEGACIÓN ====================
// Configuración de botones de cabecera generales
const btnHombre = document.getElementById('btn-link-hombre');
const btnInicio = document.getElementById('btn-link-inicio');
const btnMujer = document.getElementById('btn-link-mujer');
const btnCarritoHeader = document.getElementById('carrito-btn');
const logoH = document.getElementById('logo-h');

if (btnHombre) {
    btnHombre.addEventListener('click', (e) => {
        e.preventDefault();
        cargarVista('HombrePagina');
    });
}
if (btnInicio) {
    btnInicio.addEventListener('click', (e) => {
        e.preventDefault();
        cargarVista('inicio');
    });
}
if (btnMujer) {
    btnMujer.addEventListener('click', (e) => {
        e.preventDefault();
        cargarVista('mujerPagina');
    });
}
if (btnCarritoHeader) {
    btnCarritoHeader.addEventListener('click', (e) => {
        e.preventDefault();
        cargarVista('carrito');
    });
}
if (logoH) {
    logoH.addEventListener('click', (e) => {
        e.preventDefault();
        cargarVista('inicio');
    });
}

// Cargar la vista inicial en DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Si no hay ninguna cargada, iniciar con inicio o la vista redirigida
    const contenedorVista = document.getElementById('contenido-dinamico');
    if (contenedorVista && contenedorVista.children.length === 0) {
        const vistaInicial = localStorage.getItem('vistaInicial') || 'inicio';
        localStorage.removeItem('vistaInicial');
        cargarVista(vistaInicial);
    }
});