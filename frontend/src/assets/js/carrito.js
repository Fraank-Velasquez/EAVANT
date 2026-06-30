// Lógica de Carrito de Compras de EAVANT - carrito.js

// 1. OBTENER Y GUARDAR ESTADO EN LOCALSTORAGE
window.obtenerCarrito = function() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
};

window.guardarCarrito = function(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

// 2. ACTUALIZAR EL CONTADOR DEL HEADER
window.actualizarContadorCarrito = function() {
    const contador = document.querySelector('.contador-carrito');
    if (!contador) return;
    const carrito = window.obtenerCarrito();
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    contador.textContent = totalCantidad;
};

// 3. AÑADIR UN PRODUCTO AL CARRITO
window.agregarAlCarrito = function(productoId, talla, color, cantidad = 1) {
    const carrito = window.obtenerCarrito();
    
    // Buscar si ya existe el mismo artículo con misma talla y color
    const itemExistente = carrito.find(item => 
        item.productoId === productoId && 
        item.talla === talla && 
        item.color === color
    );

    if (itemExistente) {
        // Validar stock máximo si está definido en el producto
        const prodInfo = window.PRODUCTOS.find(p => p.id === productoId);
        const stockDisponible = prodInfo && prodInfo.stock && prodInfo.stock[talla] !== undefined ? prodInfo.stock[talla] : 99;
        
        if (itemExistente.cantidad + cantidad > stockDisponible) {
            alert(`Lo sentimos, solo quedan ${stockDisponible} unidades de la talla ${talla} en stock.`);
            return;
        }
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({ productoId, talla, color, cantidad });
    }

    window.guardarCarrito(carrito);
    window.actualizarContadorCarrito();
    alert("Pieza añadida al carrito de compras con éxito.");
};

// 4. INICIALIZADOR DE LA VISTA DE CARRITO
window.inicializarCarrito = function() {
    const contenedorItems = document.getElementById('contenedor-items-carrito');
    const vistaCarrito = document.getElementById('vista-carrito-items');
    const resumenSubtotal = document.getElementById('resumen-subtotal');
    const resumenEnvio = document.getElementById('resumen-envio');
    const resumenTotal = document.getElementById('resumen-total');
    const btnProceder = document.getElementById('btn-proceder-pago');

    // Elementos de checkout
    const vistaCheckout = document.getElementById('vista-checkout');
    const bloqueEnvio = document.getElementById('bloque-envio');
    const bloquePago = document.getElementById('bloque-pago');
    const btnContinuarPago = document.getElementById('btn-continuar-pago');
    const btnRegresarCarritoDesdeEnvio = document.getElementById('btn-regresar-carrito-desde-envio');
    const btnRegresarEnvio = document.getElementById('btn-regresar-envio');
    const btnFinalizarCompra = document.getElementById('btn-finalizar-compra');
    const totalSubtotalCheckout = document.getElementById('checkout-subtotal');
    const totalEnvioCheckout = document.getElementById('checkout-envio');
    const totalCheckout = document.getElementById('checkout-total');
    const contenedorResumenCheckout = document.getElementById('contenedor-checkout-resumen-items');
    const overlayCarga = document.getElementById('cargando-pago-overlay');

    // Elementos de éxito
    const vistaExito = document.getElementById('vista-exito-checkout');
    const exitoCodigo = document.getElementById('exito-codigo-pedido');
    const exitoMetodo = document.getElementById('exito-metodo-pago');
    const exitoDireccion = document.getElementById('exito-direccion-envio');
    const exitoMonto = document.getElementById('exito-monto-pagado');

    const tituloPagina = document.getElementById('titulo-pagina-carrito');
    const subtituloPagina = document.getElementById('subtitulo-pagina-carrito');

    const envioFijo = 15.00;

    // Renderizar carrito principal
    function renderizarListaCarrito() {
        const carrito = window.obtenerCarrito();

        if (carrito.length === 0) {
            // Mostrar mensaje de vacío
            if (vistaCarrito) {
                vistaCarrito.innerHTML = `
                    <div class="carrito-vacio-mensaje">
                        <p>No has seleccionado ninguna pieza todavía</p>
                        <a href="#" class="btn-regresar-comprar" onclick="event.preventDefault(); cargarVista('inicio');">Explorar Colecciones</a>
                    </div>
                `;
            }
            if (tituloPagina) tituloPagina.textContent = "Su Carrito está vacío";
            if (subtituloPagina) subtituloPagina.textContent = "Explore la alta costura EAVANT";
            return;
        }

        if (contenedorItems) {
            contenedorItems.innerHTML = '';
            let subtotal = 0;

            carrito.forEach((item, index) => {
                const prod = window.PRODUCTOS.find(p => p.id === item.productoId);
                if (!prod) return;

                const plantilla = document.getElementById('plantilla-item-carrito');
                const clon = plantilla.content.cloneNode(true);

                // Configurar elementos de la plantilla
                const img = clon.querySelector('.item-carrito-imagen');
                const nombre = clon.querySelector('.item-carrito-nombre');
                const meta = clon.querySelector('.item-carrito-meta');
                const inputCant = clon.querySelector('.input-cantidad');
                const precio = clon.querySelector('.item-carrito-precio');
                const btnMenos = clon.querySelector('.btn-cantidad-menos');
                const btnMas = clon.querySelector('.btn-cantidad-mas');
                const btnEliminar = clon.querySelector('.btn-eliminar-item');

                const itemTotal = prod.precio * item.cantidad;
                subtotal += itemTotal;

                if (img) {
                    img.src = prod.imagenPrincipal;
                    img.alt = prod.nombre;
                }
                if (nombre) nombre.textContent = prod.nombre;
                if (meta) meta.textContent = `Talla: ${item.talla} | Color: ${item.color}`;
                if (inputCant) inputCant.value = item.cantidad;
                if (precio) precio.textContent = `S/. ${itemTotal.toFixed(2)}`;

                // Eventos de controles de cantidad
                if (btnMenos) {
                    btnMenos.addEventListener('click', () => {
                        if (item.cantidad > 1) {
                            item.cantidad--;
                            window.guardarCarrito(carrito);
                            window.actualizarContadorCarrito();
                            renderizarListaCarrito();
                        }
                    });
                }

                if (btnMas) {
                    btnMas.addEventListener('click', () => {
                        const stockMax = prod.stock && prod.stock[item.talla] !== undefined ? prod.stock[item.talla] : 99;
                        if (item.cantidad < stockMax) {
                            item.cantidad++;
                            window.guardarCarrito(carrito);
                            window.actualizarContadorCarrito();
                            renderizarListaCarrito();
                        } else {
                            alert(`Lo sentimos, no hay más stock para la talla ${item.talla}.`);
                        }
                    });
                }

                if (btnEliminar) {
                    btnEliminar.addEventListener('click', () => {
                        carrito.splice(index, 1);
                        window.guardarCarrito(carrito);
                        window.actualizarContadorCarrito();
                        renderizarListaCarrito();
                    });
                }

                contenedorItems.appendChild(clon);
            });

            // Actualizar totalizadores en pantalla
            const total = subtotal + envioFijo;
            if (resumenSubtotal) resumenSubtotal.textContent = `S/. ${subtotal.toFixed(2)}`;
            if (resumenEnvio) resumenEnvio.textContent = `S/. ${envioFijo.toFixed(2)}`;
            if (resumenTotal) resumenTotal.textContent = `S/. ${total.toFixed(2)}`;
        }
    }

    // Calcular valores para checkout
    function prepararCheckout() {
        const carrito = window.obtenerCarrito();
        if (contenedorResumenCheckout) {
            contenedorResumenCheckout.innerHTML = '';
            let subtotal = 0;

            carrito.forEach(item => {
                const prod = window.PRODUCTOS.find(p => p.id === item.productoId);
                if (!prod) return;

                const itemTotal = prod.precio * item.cantidad;
                subtotal += itemTotal;

                const div = document.createElement('div');
                div.style.display = 'flex';
                div.style.justifyContent = 'space-between';
                div.style.fontSize = '0.85rem';
                div.style.color = '#5e5e5e';
                div.innerHTML = `
                    <span>${prod.nombre} (x${item.cantidad}) [${item.talla}]</span>
                    <span style="font-family: 'JetBrains Mono', monospace;">S/. ${itemTotal.toFixed(2)}</span>
                `;
                contenedorResumenCheckout.appendChild(div);
            });

            const total = subtotal + envioFijo;
            if (totalSubtotalCheckout) totalSubtotalCheckout.textContent = `S/. ${subtotal.toFixed(2)}`;
            if (totalEnvioCheckout) totalEnvioCheckout.textContent = `S/. ${envioFijo.toFixed(2)}`;
            if (totalCheckout) totalCheckout.textContent = `S/. ${total.toFixed(2)}`;
        }
    }

    // Paso 1 -> Paso 2: Proceder al Pago (Mostrar Dirección de Envío)
    if (btnProceder) {
        btnProceder.addEventListener('click', () => {
            const carrito = window.obtenerCarrito();
            if (carrito.length === 0) {
                alert("El carrito está vacío.");
                return;
            }
            if (vistaCarrito) vistaCarrito.classList.add('contendor-no-visible');
            if (vistaCheckout) vistaCheckout.classList.remove('contendor-no-visible');
            
            // Mostrar formulario de envío y ocultar pago
            if (bloqueEnvio) bloqueEnvio.classList.remove('contendor-no-visible');
            if (bloquePago) bloquePago.classList.add('contendor-no-visible');

            if (tituloPagina) tituloPagina.textContent = "Dirección de Envío";
            if (subtituloPagina) subtituloPagina.textContent = "Complete sus datos de entrega";
            prepararCheckout();
        });
    }

    // Paso 2 -> Paso 1: Regresar al Carrito desde Envío
    if (btnRegresarCarritoDesdeEnvio) {
        btnRegresarCarritoDesdeEnvio.addEventListener('click', () => {
            if (vistaCheckout) vistaCheckout.classList.add('contendor-no-visible');
            if (vistaCarrito) vistaCarrito.classList.remove('contendor-no-visible');
            if (tituloPagina) tituloPagina.textContent = "Carrito de Compras";
            if (subtituloPagina) subtituloPagina.textContent = "Revisa tus piezas antes de proceder";
            renderizarListaCarrito();
        });
    }

    // Paso 2 -> Paso 3: Continuar al Pago (Validar Envío y Mostrar Pago)
    if (btnContinuarPago) {
        btnContinuarPago.addEventListener('click', () => {
            // Validaciones del formulario de envío
            const nombre = document.getElementById('input-nombre-completo').value.trim();
            const direccion = document.getElementById('input-direccion').value.trim();
            const ciudad = document.getElementById('input-ciudad').value.trim();
            const telefono = document.getElementById('input-telefono').value.trim();

            if (!nombre || !direccion || !ciudad || !telefono) {
                alert("Por favor, complete todos los campos de la dirección de envío.");
                return;
            }

            // Ocultar formulario de envío y mostrar pago
            if (bloqueEnvio) bloqueEnvio.classList.add('contendor-no-visible');
            if (bloquePago) bloquePago.classList.remove('contendor-no-visible');

            if (tituloPagina) tituloPagina.textContent = "Información de Pago";
            if (subtituloPagina) subtituloPagina.textContent = "Seleccione y complete su método de pago";
        });
    }

    // Paso 3 -> Paso 2: Regresar a Dirección de Envío desde Pago
    if (btnRegresarEnvio) {
        btnRegresarEnvio.addEventListener('click', () => {
            if (bloquePago) bloquePago.classList.add('contendor-no-visible');
            if (bloqueEnvio) bloqueEnvio.classList.remove('contendor-no-visible');

            if (tituloPagina) tituloPagina.textContent = "Dirección de Envío";
            if (subtituloPagina) subtituloPagina.textContent = "Complete sus datos de entrega";
        });
    }

    // Lógica de pestañas de métodos de pago (Visa, Mastercard, Yape)
    const selectoresMetodo = document.querySelectorAll('.btn-metodo-pago');
    const seccionTarjeta = document.getElementById('pago-tarjeta-seccion');
    const seccionYape = document.getElementById('pago-yape-seccion');
    let metodoSeleccionado = 'visa';

    selectoresMetodo.forEach(btn => {
        btn.addEventListener('click', () => {
            selectoresMetodo.forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            metodoSeleccionado = btn.getAttribute('data-metodo');

            if (metodoSeleccionado === 'yape') {
                if (seccionTarjeta) seccionTarjeta.classList.remove('activo');
                if (seccionYape) seccionYape.classList.add('activo');
            } else {
                if (seccionYape) seccionYape.classList.remove('activo');
                if (seccionTarjeta) seccionTarjeta.classList.add('activo');
            }
        });
    });

    // Formateadores automáticos sencillos para inputs de tarjetas
    const inputNumTarjeta = document.getElementById('tarjeta-numero');
    if (inputNumTarjeta) {
        inputNumTarjeta.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            let formated = '';
            for (let i = 0; i < val.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    formated += ' ';
                }
                formated += val[i];
            }
            e.target.value = formated;
        });
    }

    const inputExpTarjeta = document.getElementById('tarjeta-expiracion');
    if (inputExpTarjeta) {
        inputExpTarjeta.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            if (val.length >= 2) {
                e.target.value = val.slice(0, 2) + '/' + val.slice(2, 4);
            } else {
                e.target.value = val;
            }
        });
    }

    // Paso 3 -> Paso 4: Finalizar Compra (Validar Pago, Mostrar Spinner y Modal de Éxito)
    if (btnFinalizarCompra) {
        btnFinalizarCompra.addEventListener('click', () => {
            // Re-validar envío por si acaso
            const direccion = document.getElementById('input-direccion').value.trim();
            const ciudad = document.getElementById('input-ciudad').value.trim();

            // Validaciones del método de pago
            if (metodoSeleccionado === 'yape') {
                const celular = document.getElementById('yape-celular').value.trim();
                if (celular.length < 9) {
                    alert("Por favor, ingrese un número celular válido asociado a Yape.");
                    return;
                }
            } else {
                const titular = document.getElementById('tarjeta-titular').value.trim();
                const numero = document.getElementById('tarjeta-numero').value.trim();
                const exp = document.getElementById('tarjeta-expiracion').value.trim();
                const cvv = document.getElementById('tarjeta-cvv').value.trim();

                if (!titular || numero.length < 16 || exp.length < 5 || cvv.length < 3) {
                    alert("Por favor, complete los datos de la tarjeta correctamente.");
                    return;
                }
            }

            // Flujo de simulación de pago con carga
            if (overlayCarga) {
                overlayCarga.classList.add('activo');
            }

            setTimeout(() => {
                if (overlayCarga) overlayCarga.classList.remove('activo');
                
                // Mostrar modal de éxito
                if (vistaCheckout) vistaCheckout.classList.add('contendor-no-visible');
                if (vistaExito) {
                    vistaExito.classList.remove('contendor-no-visible');
                    vistaExito.classList.add('activo');
                }
                if (tituloPagina) tituloPagina.textContent = "Compra Confirmada";
                if (subtituloPagina) subtituloPagina.textContent = "¡Gracias por preferir EAVANT!";

                // Generar código de pedido y rellenar datos
                const numPedidoRandom = Math.floor(10000 + Math.random() * 90000);
                const totalPedido = parseFloat(totalCheckout.textContent.replace('S/. ', ''));

                if (exitoCodigo) exitoCodigo.textContent = `#EV-${numPedidoRandom}`;
                if (exitoMetodo) exitoMetodo.textContent = metodoSeleccionado.toUpperCase();
                if (exitoDireccion) exitoDireccion.textContent = `${direccion}, ${ciudad}`;
                if (exitoMonto) exitoMonto.textContent = `S/. ${totalPedido.toFixed(2)}`;

                // Vaciar el carrito de compras en localStorage
                window.guardarCarrito([]);
                window.actualizarContadorCarrito();
            }, 2500);
        });
    }

    // Renderizar carrito inicial
    renderizarListaCarrito();
};

// Sincronizar el contador en la primera carga
document.addEventListener('DOMContentLoaded', () => {
    window.actualizarContadorCarrito();
});
