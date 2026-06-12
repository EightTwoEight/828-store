// ============================================================
//  EIGHT TWO EIGHT — APP.JS
//  Lógica completa de la tienda
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── INICIALIZAR CONFIG ──────────────────────────────────
  const tel = CONFIG.whatsappNumero;

  // WhatsApp flotante
  document.getElementById('wa-float').href =
    `https://wa.me/${tel}?text=Hola, estoy visitando la tienda 828 y me gustaría más información.`;

  // WhatsApp contacto
  document.getElementById('wa-contacto').href =
    `https://wa.me/${tel}?text=Hola, tengo una pregunta sobre 828.`;

  // Email
  const mailLink = document.getElementById('mail-link');
  const mailText = document.getElementById('mail-text');
  mailLink.href = `mailto:${CONFIG.emailContacto}`;
  mailText.textContent = CONFIG.emailContacto;

  // Redes sociales en footer
  const social = document.getElementById('fb-social');
  if (CONFIG.instagram) social.innerHTML += `<a href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram</a>`;
  if (CONFIG.tiktok)    social.innerHTML += `<a href="${CONFIG.tiktok}"    target="_blank" rel="noopener">TikTok</a>`;

  // ── NAVBAR SCROLL ───────────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── MENÚ MÓVIL ─────────────────────────────────────────
  const menuBtn    = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay    = document.getElementById('mm-overlay');
  const menuClose  = document.getElementById('menu-close');

  function openMenu() {
    mobileMenu.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  menuBtn.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.mm-link').forEach(l => l.addEventListener('click', closeMenu));

  // ── BUSCADOR ────────────────────────────────────────────
  const searchBtn     = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose   = document.getElementById('search-close');
  const searchInput   = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput.focus(), 100);
  });
  searchClose.addEventListener('click', () => searchOverlay.classList.remove('active'));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      searchOverlay.classList.remove('active');
      closeModal();
    }
  });

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = '';
    if (!q) return;
    const resultados = PRODUCTOS.filter(p =>
      p.nombre.toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q)
    );
    if (!resultados.length) {
      searchResults.innerHTML = `<p style="text-align:center;color:#999;font-size:14px;">Sin resultados para "${q}"</p>`;
      return;
    }
    resultados.forEach(p => {
      const el = document.createElement('div');
      el.className = 'sr-item';
      el.innerHTML = `
        <img class="sr-img" src="${p.imagen}" alt="${p.nombre}" loading="lazy" />
        <div class="sr-info">
          <div class="sr-name">${p.nombre}</div>
          <div class="sr-price">${p.precio}</div>
        </div>`;
      el.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
        abrirModal(p);
      });
      searchResults.appendChild(el);
    });
  });

  // ── RENDER PRODUCTOS ────────────────────────────────────
  const grid = document.getElementById('productos-grid');

  function renderProductos(lista) {
    grid.innerHTML = '';
    if (!lista.length) {
      grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#999;padding:48px 0;font-size:14px;">No hay productos en esta categoría todavía.</p>`;
      return;
    }
    lista.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'prod-card reveal';
      card.style.transitionDelay = `${(i % 3) * 80}ms`;
      card.innerHTML = `
        <div class="pc-img-wrap">
          <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" />
          ${p.etiqueta ? `<span class="pc-etiqueta ${p.etiqueta === 'Agotado' ? 'agotado' : ''}">${p.etiqueta}</span>` : ''}
        </div>
        <div class="pc-body">
          <div class="pc-cat">${p.categoria}</div>
          <div class="pc-name">${p.nombre}</div>
          <div class="pc-desc">${p.descripcion}</div>
          <div class="pc-footer">
            <div class="pc-price">${p.precio}</div>
            <button class="pc-cta" aria-label="Pedir ${p.nombre} por WhatsApp">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Pedir
            </button>
          </div>
        </div>`;

      // Click en card → abrir modal
      card.querySelector('.pc-img-wrap').addEventListener('click', () => abrirModal(p));
      card.querySelector('.pc-name').addEventListener('click', () => abrirModal(p));

      // Click en botón → WhatsApp directo
      card.querySelector('.pc-cta').addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(`https://wa.me/${tel}?text=${encodeURIComponent(p.whatsapp)}`, '_blank');
      });

      grid.appendChild(card);
    });
    observarReveal();
  }

  // Render inicial
  renderProductos(PRODUCTOS);

  // ── FILTROS ─────────────────────────────────────────────
  function filtrarCategoria(cat) {
    // Actualizar botones
    document.querySelectorAll('.filtro-btn').forEach(b => {
      b.classList.toggle('active', b.textContent.trim() === (cat === 'Todos' ? 'Todos' : cat === 'Tecnologia' ? 'Tecnología' : cat));
    });
    // Scroll a productos
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Filtrar
    const lista = cat === 'Todos' ? PRODUCTOS : PRODUCTOS.filter(p => p.categoria === cat);
    renderProductos(lista);
  }
  window.filtrarCategoria = filtrarCategoria;

  // ── MODAL ───────────────────────────────────────────────
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose   = document.getElementById('modal-close');

  function abrirModal(p) {
    document.getElementById('modal-img').src    = p.imagen;
    document.getElementById('modal-img').alt    = p.nombre;
    document.getElementById('modal-cat').textContent    = p.categoria;
    document.getElementById('modal-name').textContent   = p.nombre;
    document.getElementById('modal-price').textContent  = p.precio;
    document.getElementById('modal-desc').textContent   = p.descripcion;
    document.getElementById('modal-wa').href =
      `https://wa.me/${tel}?text=${encodeURIComponent(p.whatsapp)}`;
    const etiq = document.getElementById('modal-etiqueta');
    etiq.textContent = p.etiqueta || '';
    etiq.style.display = p.etiqueta ? 'block' : 'none';
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

  // Compartir producto
  document.getElementById('modal-share').addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({ title: 'Eight Two Eight', text: document.getElementById('modal-name').textContent, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      document.getElementById('modal-share').textContent = '¡Enlace copiado!';
      setTimeout(() => { document.getElementById('modal-share').textContent = 'Compartir producto'; }, 2000);
    }
  });

  // ── REVEAL ON SCROLL ────────────────────────────────────
  function observarReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }
  observarReveal();

  // Revelar secciones al hacer scroll
  const revealSections = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.trust-item, .cat-card, .nos-left, .nos-right, .contacto-inner').forEach(el => {
    el.classList.add('reveal');
    revealSections.observe(el);
  });

  // ── SMOOTH SCROLL LINKS ──────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

});
