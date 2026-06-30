// Base de Datos Local de Productos - EAVANT

window.PRODUCTOS = [
  // ==================== SECCIÓN HOMBRE (18 Productos) ====================
  {
    id: "h1",
    nombre: "Camisa de Vestir Slim Fit",
    precio: 90.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Denimlab",
    tallas: ["S", "M", "L"],
    colores: ["BLANCO", "AZUL"],
    materiales: ["Algodon", "Slim fit"],
    imagenPrincipal: "../assets/img/prendasHombre/camisaHombre.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasHombre/camisaHombre.jpg",
      "",
      ""
    ],
    descripcion: "Camisa de vestir de silueta slim fit, perfecta para ocasiones formales.",
    descripcionDetallada: "Esta camisa representa el equilibrio perfecto entre modernidad y formalidad. Su diseño slim fit entalla el cuerpo de manera natural sin restringir el movimiento.",
    materialesDetalle: [
      "97% Algodón premium, 3% Elastano",
      "Caída suave y planchado mínimo",
      "Lavar en frío a máquina"
    ],
    stock: { "S": 5, "M": 10, "L": 8, "XL": 0 }
  },
  {
    id: "h2",
    nombre: "Traje Gc azul marino",
    precio: 150.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Basement",
    tallas: ["M", "L", "XL"],
    colores: ["AZUL"],
    materiales: ["Lana"],
    imagenPrincipal: "../assets/img/prendasHombre/imagenTerno1.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasHombre/imagenTerno1.jpg",
      "",
      ""
    ],
    descripcion: "Traje de gala de dos piezas confeccionado en fina lana azul marino.",
    descripcionDetallada: "Un terno sofisticado de corte italiano con solapas de muesca y bolsillos con solapa. Ideal para bodas y eventos corporativos de gala.",
    materialesDetalle: [
      "100% Lana merino extrafina",
      "Forro interior completo de satén",
      "Limpieza en seco especializada"
    ],
    stock: { "XS": 0, "S": 0, "M": 4, "L": 6, "XL": 2 }
  },
  {
    id: "h3",
    nombre: "Traje lana gris oscuro",
    precio: 190.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Basement",
    tallas: ["S", "M", "L"],
    colores: ["NEGRO"],
    materiales: ["Lana"],
    imagenPrincipal: "../assets/img/prendasHombre/imagenTerno2.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasHombre/imagenTerno2.jpg",
      "",
      ""
    ],
    descripcion: "Elegante traje en mezcla de lana color gris marengo con sutil textura.",
    descripcionDetallada: "Diseñado para el hombre contemporáneo, este traje ofrece una caída impecable con hombros estructurados y pantalones de corte recto sin pliegues.",
    materialesDetalle: [
      "80% Lana, 20% Poliéster para durabilidad",
      "Resistente a las arrugas naturales",
      "Limpieza en seco únicamente"
    ],
    stock: { "S": 3, "M": 5, "L": 4, "XL": 0 }
  },
  {
    id: "h4",
    nombre: "Chaqueta de Cuero Negra",
    precio: 190.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Denimlab",
    tallas: ["S", "M", "L", "XL"],
    colores: ["NEGRO"],
    materiales: ["Cuero"],
    imagenPrincipal: "../assets/img/prendasHombre/ChaquetaNegraCuer.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasHombre/ChaquetaNegraCuer.jpg",
      "../assets/img/prendasHombre/chaquetaCueroHombre.jpg",
      "../assets/img/prendasHombre/chaquetaPorshe.jpg"
    ],
    descripcion: "Chaqueta de cuero genuino estilo biker con cremalleras metálicas.",
    descripcionDetallada: "Nuestra clásica chaqueta de cuero negro destaca por su durabilidad y estilo atemporal. Equipada con solapas de presión y costuras reforzadas en hombros.",
    materialesDetalle: [
      "100% Cuero de cordero de alta densidad",
      "Forro interior 100% poliéster acolchado suave",
      "No lavar, aplicar limpiador especial de cuero"
    ],
    stock: { "S": 2, "M": 6, "L": 8, "XL": 3 }
  },
  {
    id: "h5",
    nombre: "Chaqueta de Cuero Marrón",
    precio: 190.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Denimlab",
    tallas: ["S", "M", "L"],
    colores: ["MARRON"],
    materiales: ["Cuero"],
    imagenPrincipal: "../assets/img/prendasHombre/chaquetaCueroHombre.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasHombre/chaquetaCueroHombre.jpg",
      "",
      ""
    ],
    descripcion: "Chaqueta de cuero marrón con cuello clásico y bolsillos de parche.",
    descripcionDetallada: "Una pieza casual de cuero con un acabado encerado de efecto envejecido, que mejora con el paso del tiempo y el uso regular.",
    materialesDetalle: [
      "100% Cuero bovino de grano entero",
      "Cremalleras de latón de alta resistencia",
      "Evitar contacto directo con agua de lluvia"
    ],
    stock: { "S": 4, "M": 4, "L": 2, "XL": 0 }
  },
  {
    id: "h6",
    nombre: "Chaqueta Porsche Design",
    precio: 160.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Alpha",
    tallas: ["M", "L"],
    colores: ["NEGRO"],
    materiales: ["Slim fit"],
    imagenPrincipal: "../assets/img/prendasHombre/chaquetaPorshe.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasHombre/chaquetaPorshe.jpg",
      "",
      ""
    ],
    descripcion: "Chaqueta deportiva de alto rendimiento con detalles aerodinámicos.",
    descripcionDetallada: "Inspirada en el automovilismo deportivo, cuenta con tejidos ligeros cortavientos, ajuste elástico en puños y logotipo reflectante.",
    materialesDetalle: [
      "100% Poliamida ripstop impermeable",
      "Membrana interior transpirable active-dry",
      "Lavar a mano sin suavizante"
    ],
    stock: { "XS": 0, "S": 0, "M": 5, "L": 3, "XL": 0 }
  },
  {
    id: "h7",
    nombre: "Pantalón de Vestir Negro",
    precio: 120.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Basement",
    tallas: ["S", "M", "L"],
    colores: ["NEGRO"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasHombre/PantalonDeVestirNegro.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasHombre/PantalonDeVestirNegro.jpg",
      "",
      ""
    ],
    descripcion: "Pantalón de vestir negro corte sastre en mezcla de algodón premium.",
    descripcionDetallada: "Confección elegante con pretina ajustable, trabillas integradas y bolsillos laterales de ojal. Ideal para oficina y eventos semi-formales.",
    materialesDetalle: [
      "95% Algodón egipcio, 5% Lycra para confort",
      "Borde inferior con costura invisible",
      "Apto para lavado delicado"
    ],
    stock: { "S": 6, "M": 12, "L": 8, "XL": 0 }
  },
  {
    id: "h8",
    nombre: "Polo Negro con Cuello",
    precio: 80.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Asics",
    tallas: ["XS", "S", "M", "L"],
    colores: ["NEGRO"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasHombre/poloNegroconCuello.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasHombre/poloNegroconCuello.jpg",
      "",
      ""
    ],
    descripcion: "Polo deportivo de algodón piqué con cuello tejido y tapeta de dos botones.",
    descripcionDetallada: "Combina el estilo urbano casual con un ajuste ergonómico que garantiza la comodidad durante todo el día sin perder la elegancia.",
    materialesDetalle: [
      "100% Algodón piqué peinado",
      "Cuello y puños acanalados indeformables",
      "Lavar del revés con colores similares"
    ],
    stock: { "XS": 3, "S": 8, "M": 10, "L": 7, "XL": 0 }
  },
  {
    id: "h9",
    nombre: "Pantalón de Vestir Marrón",
    precio: 110.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Basement",
    tallas: ["S", "M", "L"],
    colores: ["MARRON"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasHombre/pantalonMarron.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasHombre/pantalonMarron.jpg",
      "",
      ""
    ],
    descripcion: "Pantalón sastre en tono marrón tostado, ideal para outfits otoñales.",
    descripcionDetallada: "Combina perfectamente con camisas claras y blazers oscuros. Su estructura slim fit perfila las piernas manteniendo la comodidad sastrera.",
    materialesDetalle: [
      "98% Gabardina de algodón, 2% Elastano",
      "Tejido resistente de tacto suave",
      "Lanchar a temperatura media"
    ],
    stock: { "S": 4, "M": 8, "L": 5, "XL": 0 }
  },
  {
    id: "h10",
    nombre: "Traje de Vestir Granate",
    precio: 190.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Basement",
    tallas: ["M", "L"],
    colores: ["BURDEO"],
    materiales: ["Lana"],
    imagenPrincipal: "../assets/img/prendasHombre/ternoGranate.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasHombre/ternoGranate.jpg",
      "",
      ""
    ],
    descripcion: "Audaz terno granate burdeos de dos piezas de silueta entallada moderna.",
    descripcionDetallada: "Destaca con distinción en cualquier celebración formal con este traje color vino. Solapas delgadas y forro interior estampado exclusivo.",
    materialesDetalle: [
      "90% Lana de oveja virgen, 10% Seda silvestre",
      "Botones de asta natural grabados",
      "Requiere tintorería especializada"
    ],
    stock: { "XS": 0, "S": 0, "M": 3, "L": 4, "XL": 0 }
  },
  {
    id: "h11",
    nombre: "Camisa Oxford Azul Claro",
    precio: 85.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Denimlab",
    tallas: ["S", "M", "L"],
    colores: ["AZUL"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasHombre/camisaHombre.jpg",
    imagenesMiniatura: [],
    descripcion: "Camisa de tela Oxford azul cielo con cuello abotonado clásica.",
    descripcionDetallada: "El clásico de guardarropa que nunca falla. De silueta regular fit, confeccionada en tejido grueso y texturizado de alta durabilidad.",
    materialesDetalle: [
      "100% Algodón Oxford trenzado",
      "Bolsillo de parche en el pecho",
      "Apto para secadora a baja temperatura"
    ],
    stock: { "S": 6, "M": 9, "L": 6, "XL": 0 }
  },
  {
    id: "h12",
    nombre: "Chaqueta Aviadora Marrón",
    precio: 220.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Alpha",
    tallas: ["M", "L"],
    colores: ["MARRON"],
    materiales: ["Cuero"],
    imagenPrincipal: "../assets/img/prendasHombre/chaquetaCueroHombre.jpg",
    imagenesMiniatura: [],
    descripcion: "Chaqueta tipo aviador con cuello desmontable de lana y puños tejidos.",
    descripcionDetallada: "Estética militar clásica combinada con materiales premium. El cuello de borrego sintético ofrece calidez en los días más fríos del año.",
    materialesDetalle: [
      "100% Cuero bovino con tratamiento hidrófugo",
      "Forro térmico interior extraíble",
      "Lavar en seco"
    ],
    stock: { "S": 0, "M": 3, "L": 5, "XL": 0 }
  },
  {
    id: "h13",
    nombre: "Blazer de Lana Gris",
    precio: 180.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Basement",
    tallas: ["S", "M", "L"],
    colores: ["NEGRO"],
    materiales: ["Lana"],
    imagenPrincipal: "../assets/img/prendasHombre/imagenTerno2.jpg",
    imagenesMiniatura: [],
    descripcion: "Blazer formal cruzado en lana gris texturizada.",
    descripcionDetallada: "Corte estructurado con botones frontales contrastantes de diseño náutico. Ideal para combinar con vaqueros o pantalones sastre beige.",
    materialesDetalle: [
      "70% Lana premium, 30% Cachemira sintética",
      "Doble abertura trasera para comodidad",
      "Tratamiento protector de tejidos"
    ],
    stock: { "S": 2, "M": 4, "L": 3, "XL": 0 }
  },
  {
    id: "h14",
    nombre: "Polo Blanco de Algodón",
    precio: 65.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Asics",
    tallas: ["XS", "S", "M", "L"],
    colores: ["BLANCO"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasHombre/poloNegroconCuello.jpg",
    imagenesMiniatura: [],
    descripcion: "Polo clásico blanco de cuello redondo en suave tejido de algodón peinado.",
    descripcionDetallada: "Una prenda básica esencial y fresca para actividades cotidianas, de silueta semi-ajustada y gran suavidad en costuras.",
    materialesDetalle: [
      "100% Algodón orgánico certificado",
      "Costuras reforzadas en hombros",
      "Lavar en máquina en ciclo suave"
    ],
    stock: { "XS": 5, "S": 10, "M": 12, "L": 8, "XL": 0 }
  },
  {
    id: "h15",
    nombre: "Pantalón Chino Beige",
    precio: 105.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Denimlab",
    tallas: ["S", "M", "L"],
    colores: ["BEIGE"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasHombre/pantalonMarron.jpg",
    imagenesMiniatura: [],
    descripcion: "Pantalón tipo chino color beige arena de corte slim fit moderno.",
    descripcionDetallada: "Práctico y versátil pantalón chino para el día a día. Tela ligeramente elástica que favorece el calce perfecto y la libertad de movimiento.",
    materialesDetalle: [
      "98% Sarga de algodón peinado, 2% Spandex",
      "Bolsillos chinos clásicos traseros",
      "Apto para lavado regular"
    ],
    stock: { "S": 5, "M": 8, "L": 4, "XL": 0 }
  },
  {
    id: "h16",
    nombre: "Traje de Gala Negro",
    precio: 250.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Basement",
    tallas: ["S", "M", "L", "XL"],
    colores: ["NEGRO"],
    materiales: ["Lana"],
    imagenPrincipal: "../assets/img/prendasHombre/imagenTerno1.jpg",
    imagenesMiniatura: [],
    descripcion: "Smoking de etiqueta negro con solapas de satén brillantes sutiles.",
    descripcionDetallada: "El traje definitivo de máxima gala. Diseñado para noches de etiqueta con solapas satinadas de muesca, un solo botón y galones laterales en pantalón.",
    materialesDetalle: [
      "95% Lana virgen súper 120s, 5% Satén de seda",
      "Acabado repelente al polvo y manchas",
      "Tintorería especializada"
    ],
    stock: { "S": 2, "M": 3, "L": 4, "XL": 2 }
  },
  {
    id: "h17",
    nombre: "Chaqueta Cortavientos Sport",
    precio: 130.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Asics",
    tallas: ["M", "L"],
    colores: ["AZUL"],
    materiales: ["Slim fit"],
    imagenPrincipal: "../assets/img/prendasHombre/chaquetaPorshe.jpg",
    imagenesMiniatura: [],
    descripcion: "Casaca deportiva cortavientos ultraligera en tono azul eléctrico.",
    descripcionDetallada: "Prenda de running técnica repelente al agua con bolsillos sellados, detalles reflectantes 360 y capucha oculta en cuello.",
    materialesDetalle: [
      "100% Poliéster reciclado cortavientos",
      "Paneles de ventilación en axilas",
      "Lavar en agua fría"
    ],
    stock: { "S": 0, "M": 4, "L": 4, "XL": 0 }
  },
  {
    id: "h18",
    nombre: "Camisa Oxford Azul Claro",
    precio: 85.00,
    categoria: "hombre",
    coleccion: "COLECCIÓN HOMBRE",
    marca: "Denimlab",
    tallas: ["S", "M", "L"],
    colores: ["AZUL"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasHombre/camisaHombre.jpg",
    imagenesMiniatura: [],
    descripcion: "Camisa de vestir azul con cuello rígido italiano.",
    descripcionDetallada: "Confeccionada con hilado peinado fino de algodón que entrega un brillo natural sutil. Puños franceses aptos para gemelos de vestir.",
    materialesDetalle: [
      "100% Algodón de fibra larga",
      "Costura inglesa de alta precisión",
      "Planchado húmedo para acabado profesional"
    ],
    stock: { "S": 4, "M": 6, "L": 5, "XL": 0 }
  },

  // ==================== SECCIÓN MUJER (18 Productos) ====================
  {
    id: "m1",
    nombre: "Vestido de Fiesta Granate",
    precio: 150.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Basement",
    tallas: ["XS", "S", "M", "L"],
    colores: ["BURDEO"],
    materiales: ["Slim fit"],
    imagenPrincipal: "../assets/img/prendasMujer/vestidoGranate.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasMujer/vestidoGranate.jpg",
      "../assets/img/prendasMujer/vestidopurple.jpg",
      ""
    ],
    descripcion: "Espectacular vestido largo de fiesta en raso granate con escote cruzado.",
    descripcionDetallada: "Una pieza deslumbrante diseñada para estilizar la figura femenina. Corte drapeado en cintura con apertura elegante en pierna izquierda y espalda descubierta.",
    materialesDetalle: [
      "95% Raso de seda, 5% Lycra elástica",
      "Cremallera trasera invisible reforzada",
      "Limpieza en seco premium"
    ],
    stock: { "XS": 2, "S": 5, "M": 6, "L": 3, "XL": 0 }
  },
  {
    id: "m2",
    nombre: "Chaqueta Blazer Negra",
    precio: 120.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Basement",
    tallas: ["S", "M", "L"],
    colores: ["NEGRO"],
    materiales: ["Lana"],
    imagenPrincipal: "../assets/img/prendasMujer/chaquetaBlazer.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasMujer/chaquetaBlazer.jpg",
      "",
      ""
    ],
    descripcion: "Blazer negro entallado de diseño atemporal con solapas sastre finas.",
    descripcionDetallada: "El complemento perfecto para cualquier atuendo formal u de oficina. Estructurado con hombreras sutiles y botones de diseño grabados.",
    materialesDetalle: [
      "60% Lana fría, 40% Viscosa satinada",
      "Bolsillos de ojal funcionales delanteros",
      "Tintorería especializada"
    ],
    stock: { "S": 4, "M": 8, "L": 4, "XL": 0 }
  },
  {
    id: "m3",
    nombre: "Conjunto de Blazer y Pantalón Beige",
    precio: 170.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Basement",
    tallas: ["S", "M"],
    colores: ["BEIGE"],
    materiales: ["Lana"],
    imagenPrincipal: "../assets/img/prendasMujer/conjuntobeigue.png",
    imagenesMiniatura: [
      "../assets/img/prendasMujer/conjuntobeigue.png",
      "",
      ""
    ],
    descripcion: "Conjunto sastre beige compuesto por blazer cruzado y pantalón palazzo.",
    descripcionDetallada: "Elegancia minimalista pura en tono arena. El pantalón de tiro alto combina a la perfección con el blazer holgado de doble botonadura.",
    materialesDetalle: [
      "85% Lana fría tejida, 15% Seda natural",
      "Forro interior completo en viscosa beige",
      "Limpieza en seco profesional"
    ],
    stock: { "XS": 0, "S": 3, "M": 4, "L": 0, "XL": 0 }
  },
  {
    id: "m4",
    nombre: "Blusa Beige con Detalles en Encaje",
    precio: 95.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Denimlab",
    tallas: ["XS", "S", "M"],
    colores: ["BEIGE"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasMujer/blusaBeige.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasMujer/blusaBeige.jpg",
      "",
      ""
    ],
    descripcion: "Blusa beige de gasa suave decorada con paneles de encaje floral bordado.",
    descripcionDetallada: "Diseño romántico de mangas francesas y cuello cerrado con botón perlado trasero. Ideal para estilizar atuendos formales y casuales.",
    materialesDetalle: [
      "100% Gasa de algodón transpirable",
      "Paneles de encaje confeccionados a mano",
      "Lavar a mano con jabón neutro"
    ],
    stock: { "XS": 2, "S": 5, "M": 5, "L": 0, "XL": 0 }
  },
  {
    id: "m5",
    nombre: "Chaleco Gris de Lana",
    precio: 110.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Alpha",
    tallas: ["S", "M", "L"],
    colores: ["BEIGE"],
    materiales: ["Lana"],
    imagenPrincipal: "../assets/img/prendasMujer/chalecoGris.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasMujer/chalecoGris.jpg",
      "",
      ""
    ],
    descripcion: "Chaleco tejido sastre en lana melange gris y bolsillos frontales.",
    descripcionDetallada: "Prenda de silueta recta perfecta para crear combinaciones de capas sobre camisas de vestir o polos básicos de cuello alto.",
    materialesDetalle: [
      "90% Lana de cordero, 10% Fibras elásticas",
      "Botones frontales jaspeados marrones",
      "Lavar en ciclo lana o a mano"
    ],
    stock: { "S": 3, "M": 6, "L": 4, "XL": 0 }
  },
  {
    id: "m6",
    nombre: "Vestido Morado con Detalles en Encaje",
    precio: 140.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Denimlab",
    tallas: ["S", "M"],
    colores: ["BURDEO"],
    materiales: ["Slim fit"],
    imagenPrincipal: "../assets/img/prendasMujer/vestidopurple.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasMujer/vestidopurple.jpg",
      "",
      ""
    ],
    descripcion: "Vestido midi de encaje floral morado intenso con forro interior de satén.",
    descripcionDetallada: "Diseño elegante con escote en V pronunciado en pecho y espalda, mangas transparentes con orilla festoneada y silueta lápiz entallada.",
    materialesDetalle: [
      "80% Encaje de nylon, 20% Satén de poliéster",
      "Cremallera metálica trasera dorada",
      "Lavar del revés en bolsa protectora"
    ],
    stock: { "XS": 0, "S": 4, "M": 4, "L": 0, "XL": 0 }
  },
  {
    id: "m7",
    nombre: "Vestido Largo con Estampado Floral",
    precio: 85.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Basement",
    tallas: ["XS", "S", "M", "L"],
    colores: ["BLANCO"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasMujer/VestidoLargo.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasMujer/VestidoLargo.jpg",
      "",
      ""
    ],
    descripcion: "Vestido largo de algodón fluido con estampado botánico floral silvestre.",
    descripcionDetallada: "Perfecto para climas cálidos y paseos casuales. Diseño de tiras ajustables con nudo en hombros, escote fruncido y nido de abeja elástico en espalda.",
    materialesDetalle: [
      "100% Algodón orgánico fluido lavado",
      "Tejido fresco e hipoalergénico",
      "Lavar en lavadora con centrifugado suave"
    ],
    stock: { "XS": 3, "S": 7, "M": 9, "L": 5, "XL": 0 }
  },
  {
    id: "m8",
    nombre: "Blusa Azul con Detalles en Encaje",
    precio: 75.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Denimlab",
    tallas: ["S", "M"],
    colores: ["AZUL"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasMujer/blusaAzul.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasMujer/blusaAzul.jpg",
      "",
      ""
    ],
    descripcion: "Blusa de algodón azul cobalto con pechera bordada en hilos finos de encaje.",
    descripcionDetallada: "Mangas abullonadas con puño ajustado. Aporta una nota sofisticada de color al look diario de oficina o salidas de tarde.",
    materialesDetalle: [
      "100% Voile de algodón ultra suave",
      "Detalle de encaje guipur azul al tono",
      "Apto para planchado delicado"
    ],
    stock: { "XS": 0, "S": 5, "M": 6, "L": 0, "XL": 0 }
  },
  {
    id: "m9",
    nombre: "Camisa de Rayas con Detalles en Encaje",
    precio: 90.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Denimlab",
    tallas: ["S", "M", "L"],
    colores: ["BLANCO"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasMujer/camisaRayas.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasMujer/camisaRayas.jpg",
      "",
      ""
    ],
    descripcion: "Camisa sastrera de rayas celestes y blancas con hombreras bordadas.",
    descripcionDetallada: "Una reinterpretación femenina de la clásica camisa masculina de oficina, incorporando encaje festonado calado en puños y hombreras.",
    materialesDetalle: [
      "95% Algodón popelín peinado, 5% Poliéster",
      "Encaje suizo resistente al desgaste",
      "Lavar en frío y planchar al revés"
    ],
    stock: { "S": 4, "M": 6, "L": 3, "XL": 0 }
  },
  {
    id: "m10",
    nombre: "Blusa de Vestir Mujer",
    precio: 80.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Basement",
    tallas: ["XS", "S", "M", "L"],
    colores: ["BLANCO"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasMujer/BlusaVestirMujer.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasMujer/BlusaVestirMujer.jpg",
      "",
      ""
    ],
    descripcion: "Blusa blanca minimalista de silueta holgada con cuello camisa clásico.",
    descripcionDetallada: "Básico imprescindible. Confeccionado en popelina de algodón premium de tacto sedoso y caída con prestancia.",
    materialesDetalle: [
      "100% Algodón peinado de fibra extralarga",
      "Tapeta con botones ocultos frontales",
      "Lavar en máquina y colgar húmedo"
    ],
    stock: { "XS": 3, "S": 9, "M": 11, "L": 6, "XL": 0 }
  },
  {
    id: "m11",
    nombre: "Traje de Vestir Mujer",
    precio: 120.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Basement",
    tallas: ["S", "M", "L"],
    colores: ["NEGRO"],
    materiales: ["Lana"],
    imagenPrincipal: "../assets/img/prendasMujer/terno mujer.jpg",
    imagenesMiniatura: [
      "../assets/img/prendasMujer/terno mujer.jpg",
      "",
      ""
    ],
    descripcion: "Traje ejecutivo de dos piezas color negro profundo, entallado sastre.",
    descripcionDetallada: "Chaqueta estructurada de solapa de pico clásica con pantalón recto a juego de tiro medio. Aporta una prestancia formal indiscutible.",
    materialesDetalle: [
      "75% Lana sastrera, 23% Viscosa, 2% Elastano",
      "Pantalón con cierre de gancho metálico sastre",
      "Limpieza en seco recomendada"
    ],
    stock: { "S": 3, "M": 5, "L": 4, "XL": 0 }
  },
  {
    id: "m12",
    nombre: "Blusa de Lino Azul",
    precio: 85.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Denimlab",
    tallas: ["S", "M"],
    colores: ["AZUL"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasMujer/blusaAzul.jpg",
    imagenesMiniatura: [],
    descripcion: "Blusa casual de lino y algodón azul marino con escote redondo.",
    descripcionDetallada: "Prenda de textura rústica elegante y fresca, con mangas tres cuartos y pequeña apertura lágrima en el cuello con lazo ajustable.",
    materialesDetalle: [
      "55% Lino puro, 45% Algodón orgánico",
      "Textura natural transpirable",
      "Lavar en máquina con ciclo de lino"
    ],
    stock: { "S": 5, "M": 5, "L": 0, "XL": 0 }
  },
  {
    id: "m13",
    nombre: "Vestido Elegante de Gala",
    precio: 195.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Basement",
    tallas: ["S", "M", "L"],
    colores: ["NEGRO"],
    materiales: ["Slim fit"],
    imagenPrincipal: "../assets/img/prendasMujer/vestidopurple.jpg",
    imagenesMiniatura: [],
    descripcion: "Vestido largo de noche negro confeccionado en tul con encaje guipur.",
    descripcionDetallada: "El vestido ideal para galas y recepciones solemnes. Capa superior de tul bordada a mano con un forro interior nude que resalta el diseño.",
    materialesDetalle: [
      "100% Encaje de hilo de seda, forro de poliéster",
      "Largo hasta el suelo con pequeña cola trasera",
      "Tintorería premium únicamente"
    ],
    stock: { "S": 2, "M": 3, "L": 2, "XL": 0 }
  },
  {
    id: "m14",
    nombre: "Blazer Casual Blanco",
    precio: 130.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Alpha",
    tallas: ["S", "M"],
    colores: ["BLANCO"],
    materiales: ["Lana"],
    imagenPrincipal: "../assets/img/prendasMujer/chaquetaBlazer.jpg",
    imagenesMiniatura: [],
    descripcion: "Blazer blanco estructurado de corte oversize casual de un solo botón.",
    descripcionDetallada: "Ideal para looks semi-informales de verano o primavera. Aporta luminosidad con hombros caídos y mangas con puño abotonado arremangable.",
    materialesDetalle: [
      "50% Lana fría, 50% Algodón trenzado ligero",
      "Bolsillos tipo solapa delanteros",
      "Lavar en seco"
    ],
    stock: { "S": 3, "M": 4, "L": 0, "XL": 0 }
  },
  {
    id: "m15",
    nombre: "Conjunto de Lino Primavera",
    precio: 160.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Basement",
    tallas: ["S", "M", "L"],
    colores: ["BEIGE"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasMujer/conjuntobeigue.png",
    imagenesMiniatura: [],
    descripcion: "Conjunto fresco de lino y algodón beige, incluye bermuda y blazer corto.",
    descripcionDetallada: "Un look juvenil y sofisticado para días soleados. Blazer de manga corta semi-ajustado emparejado con bermudas de pinzas de tiro alto.",
    materialesDetalle: [
      "60% Algodón, 40% Lino texturizado",
      "Botones de nácar natural",
      "Apto para lavado regular"
    ],
    stock: { "S": 3, "M": 5, "L": 3, "XL": 0 }
  },
  {
    id: "m16",
    nombre: "Blusa Floreada de Encaje",
    precio: 90.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Denimlab",
    tallas: ["S", "M"],
    colores: ["BEIGE"],
    materiales: ["Algodon"],
    imagenPrincipal: "../assets/img/prendasMujer/blusaBeige.jpg",
    imagenesMiniatura: [],
    descripcion: "Blusa de gasa bordada con hilos dorados y cuello victoriano.",
    descripcionDetallada: "Destaca por sus detalles de pliegues frontales y cuello alzado de encaje guipur. Ajuste fluido de gran comodidad.",
    materialesDetalle: [
      "90% Algodón peinado suave, 10% Hilo metálico",
      "Puños elásticos fruncidos",
      "Lavar a mano delicadamente"
    ],
    stock: { "S": 4, "M": 4, "L": 0, "XL": 0 }
  },
  {
    id: "m17",
    nombre: "Chaleco Tejido Blanco",
    precio: 95.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Asics",
    tallas: ["S", "M"],
    colores: ["BLANCO"],
    materiales: ["Lana"],
    imagenPrincipal: "../assets/img/prendasMujer/chalecoGris.jpg",
    imagenesMiniatura: [],
    descripcion: "Chaleco de punto blanco trenzado de cuello en V pronunciado.",
    descripcionDetallada: "Confeccionado en lana pesada trenzada con ribete acanalado contrastante. Aporta un aire preppy e invernal a camisas clásicas.",
    materialesDetalle: [
      "100% Lana de oveja peinada",
      "Tejido grueso de alta retención térmica",
      "Lavar a mano y secar en plano horizontal"
    ],
    stock: { "S": 4, "M": 3, "L": 0, "XL": 0 }
  },
  {
    id: "m18",
    nombre: "Vestido Corto Casual",
    precio: 110.00,
    categoria: "mujer",
    coleccion: "COLECCIÓN MUJER",
    marca: "Denimlab",
    tallas: ["XS", "S", "M"],
    colores: ["BURDEO"],
    materiales: ["Slim fit"],
    imagenPrincipal: "../assets/img/prendasMujer/vestidoGranate.jpg",
    imagenesMiniatura: [],
    descripcion: "Vestido corto entallado en punto de canalé color burdeos.",
    descripcionDetallada: "Un vestido versátil de cuello redondo y manga larga, confeccionado en algodón acanalado elástico que amolda sutilmente la figura.",
    materialesDetalle: [
      "92% Algodón acanalado, 8% Elastano",
      "Textura suave de gran elasticidad",
      "Lavar en máquina en ciclo de colores"
    ],
    stock: { "XS": 3, "S": 5, "M": 4, "L": 0, "XL": 0 }
  }
];
