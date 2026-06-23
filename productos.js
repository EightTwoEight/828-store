// ============================================================
//  EIGHT TWO EIGHT — TU CATÁLOGO DE PRODUCTOS
//  ¿Cómo editar? Cambia los valores entre comillas " "
//  ¿Cómo agregar un producto? Copia un bloque { ... } completo,
//  pégalo después del último, separa con una coma.
//  ¿Cómo quitar un producto? Borra el bloque { ... } completo.
// ============================================================

const PRODUCTOS = [

  // ── TECNOLOGÍA ──────────────────────────────────────────
  {
    id: 1,
    nombre: "Smart Band Pro X",
    precio: "$189.000",
    categoria: "Tecnologia",
    etiqueta: "Más vendido",          // Opciones: "Nuevo", "Más vendido", "Agotado", "" (vacío = sin etiqueta)
    descripcion: "Monitoreo de salud 24h, batería 7 días, resistente al agua IPX7. Compatible con Android e iOS.",
    imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    whatsapp: "Hola, me interesa el Smart Band Pro X a $189.000. ¿Está disponible?"
  },
  {
    id: 2,
    nombre: "Earbuds TWS Noise Cancel",
    precio: "$210.000",
    categoria: "Tecnologia",
    etiqueta: "Nuevo",
    descripcion: "Cancelación activa de ruido, 28h de batería total, sonido Hi-Fi. Estuche de carga incluido.",
    imagen: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
    whatsapp: "Hola, me interesan los Earbuds TWS a $210.000. ¿Están disponibles?"
  },
  {
    id: 3,
    nombre: "Mini Proyector Portátil",
    precio: "$345.000",
    categoria: "Tecnologia",
    etiqueta: "",
    descripcion: "Proyección HD hasta 120 pulgadas, batería integrada 2h, conectividad HDMI y Bluetooth.",
    imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    whatsapp: "Hola, me interesa el Mini Proyector Portátil a $345.000. ¿Está disponible?"
  },

  // ── BELLEZA ─────────────────────────────────────────────
  {
    id: 4,
    nombre: "Sérum Facial Vitamina C",
    precio: "$94.000",
    categoria: "Belleza",
    etiqueta: "Más vendido",
    descripcion: "Fórmula concentrada al 20%. Unifica el tono, ilumina y reduce manchas en 4 semanas. 30ml.",
    imagen: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    whatsapp: "Hola, me interesa el Sérum Facial Vitamina C a $94.000. ¿Está disponible?"
  },
  {
    id: 5,
    nombre: "Masajeador Facial LED",
    precio: "$138.000",
    categoria: "Belleza",
    etiqueta: "Nuevo",
    descripcion: "Terapia de luz roja y azul, vibración sónica 6000rpm. Reduce arrugas y acné. USB-C recargable.",
    imagen: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
    whatsapp: "Hola, me interesa el Masajeador Facial LED a $138.000. ¿Está disponible?"
  },
  {
    id: 6,
    nombre: "Kit Skincare Ritual 828",
    precio: "$185.000",
    categoria: "Belleza",
    etiqueta: "",
    descripcion: "Limpiador, tónico y crema hidratante. Rutina de 3 pasos para piel luminosa y saludable. Kit completo.",
    imagen: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
    whatsapp: "Hola, me interesa el Kit Skincare Ritual 828 a $185.000. ¿Está disponible?"
  },

  // ── HOGAR ───────────────────────────────────────────────
  {
    id: 7,
    nombre: "Limpiador de Ventanas Magnético- Vidrios Brillantes Sin Riesgos",
    precio: "$35.000",
    categoria: "Hogar",
    etiqueta: "Más vendido",
    descripcion: "✔️ Limpia ambos lados a la vez
✔️ Ideal para ventanas y espejos
✔️ Fácil de usar
✔️ Acabado impecable",
    imagen: "https://ibb.co/GQVkCbW4",
    whatsapp: "Hola, me interesa el Difusor Aromático a $145.000. ¿Está disponible?"
  },
  {
    id: 8,
    nombre: "Lámpara de Mesa Táctil",
    precio: "$168.000",
    categoria: "Hogar",
    etiqueta: "",
    descripcion: "3 niveles de intensidad, luz cálida/neutra/fría, USB cargador lateral integrado. Diseño nórdico.",
    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    whatsapp: "Hola, me interesa la Lámpara de Mesa Táctil a $168.000. ¿Está disponible?"
  },
  {
    id: 9,
    nombre: "Set Organizador Premium",
    precio: "$112.000",
    categoria: "Hogar",
    etiqueta: "Nuevo",
    descripcion: "6 piezas en bambú y acero inoxidable. Bandeja, porta-lápices, sujetapapeles y accesorios de escritorio.",
    imagen: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    whatsapp: "Hola, me interesa el Set Organizador Premium a $112.000. ¿Está disponible?"
  }

];

 // ── MASCOTAS ───────────────────────────────────────────────
  {
    id: 10,
    nombre: "Pelota LED 828 · Juego Inteligente",
    precio: "$30.000",
    categoria: "Mascotas",
    etiqueta: "Más vendido",
    descripcion: "Luz LED de alta intensidad, cuerda reforzada resistente. Estimula el juego, reduce el estrés y activa a tu mascota. Para perros y gatos de todas las edades.",
    imagen: "https://i.ibb.co/ksc0r2pd/Whats-App-Image-2026-06-23-at-1-54-02-PM.jpg",
    whatsapp: "Hola, me interesa este producto. ¿Está disponible?"
  },
  {


// ============================================================
//  CONFIGURACIÓN GENERAL — cambia según tu negocio
// ============================================================
const CONFIG = {
  whatsappNumero: "573205584974",        // Tu número WhatsApp con código de país (sin + ni espacios)
  nombreTienda: "Eight Two Eight",
  instagram: "https://instagram.com/828store",   // Tu Instagram (o deja vacío "")
  tiktok: "",                                     // Tu TikTok (o deja vacío "")
  emailContacto: "catabohada@gmail.com",             // Tu email de contacto
  ciudadEnvio: "Colombia",
  tiempoEntrega: "1 a 2 días hábiles"
};
