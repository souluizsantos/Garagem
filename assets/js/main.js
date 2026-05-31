/*
 * main.js — Garagem Hambúrguer Artesanal
 *
 * Lógica principal: renderização de cardápio, gerenciamento de carrinho,
 * filtros por categoria, navegação e checkout via WhatsApp.
 *
 * Dependência: menu-data.js (MENU_DATA global)
 * Sem dependências externas (vanilla JavaScript)
 */

/* ─────────────────────────────────────────
   ESTADO DO CARRINHO
───────────────────────────────────────── */

/*
 * Substitua o número abaixo pelo WhatsApp real da Garagem.
 * Formato: código do país (55) + DDD + número, sem espaços ou traços.
 * Exemplo: '5549999999999'
 */
const WPP_NUMBER = '554999960317';

let cart = [];   // [{ name, price, priceNum, qty }]


/* ─────────────────────────────────────────
   RENDERIZAÇÃO DO CARDÁPIO
───────────────────────────────────────── */

function buildItem(item) {
  const badge = item.badge
    ? `<span class="menu-item-badge${item.badgeClass ? ' ' + item.badgeClass : ''}">${item.badge}</span>`
    : '';

  const classes = ['menu-item'];
  if (item.highlight) classes.push('destaque');
  if (item.featured)  classes.push('featured');

  // Usa imagem real se disponível, senão placeholder genérico por categoria
  const PLACEHOLDERS = {
    hamburgers: 'assets/images/HAMBÚRGUER.png',
    combos:     'assets/images/HAMBÚRGUER.png',
    porcoes:    'assets/images/HAMBÚRGUER.png',
    bebidas:    'assets/images/HAMBÚRGUER.png',
  };
  const imgSrc = item.image || PLACEHOLDERS[item.cat] || 'assets/images/HAMBÚRGUER.png';

  return `
<div class="${classes.join(' ')}" data-cat="${item.cat}" role="listitem">
  <img class="menu-item-img"
       src="${imgSrc}"
       alt="${item.name}"
       loading="lazy" />
  <div class="menu-item-info">
    <div class="menu-item-name">${item.name} ${badge}</div>
    <div class="menu-item-desc">${item.desc}</div>
  </div>
  <div class="menu-item-right">
    <div class="menu-item-price">${item.price}</div>
    <button class="btn-add"
            data-name="${item.name}"
            data-price="${item.price}"
            aria-label="Adicionar ${item.name} ao pedido">
      Quero Esse
    </button>
  </div>
</div>`;
}

function renderMenu() {
  const list = document.getElementById('menuList');
  if (!list) return;
  list.innerHTML = MENU_DATA.map(buildItem).join('\n');
}


/* ─────────────────────────────────────────
   FILTRO DE ABAS
───────────────────────────────────────── */

function initTabs() {
  const tabs = document.querySelectorAll('.menu-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const cat = tab.dataset.cat;
      document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.toggle('menu-hidden', cat !== 'all' && item.dataset.cat !== cat);
      });
    });
  });
}


/* ─────────────────────────────────────────
   ADICIONAR AO CARRINHO
───────────────────────────────────────── */

function parsePriceNum(priceStr) {
  return parseFloat(priceStr.replace('R$', '').trim().replace(',', '.'));
}

function addToCart(name, price) {
  const priceNum = parsePriceNum(price);
  const existing = cart.find(i => i.name === name);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, priceNum, qty: 1 });
  }

  syncCartUI();
  // Não abre o carrinho automaticamente — o usuário continua navegando
  // e abre quando estiver pronto via botão "Meu Pedido"
}

function changeQty(name, delta) {
  const idx = cart.findIndex(i => i.name === name);
  if (idx === -1) return;

  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);

  syncCartUI();
}

function getTotal() {
  return cart.reduce((sum, item) => sum + item.priceNum * item.qty, 0);
}

function fmtPrice(val) {
  return 'R$ ' + val.toFixed(2).replace('.', ',');
}


/* ─────────────────────────────────────────
   RENDERIZAÇÃO DO CARRINHO
───────────────────────────────────────── */

function syncCartUI() {
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  // Badge na navbar
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = totalItems;
    badge.classList.toggle('visible', totalItems > 0);
  }

  // Itens no drawer
  const body = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('btnCheckout');

  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = '<p class="cart-empty">Sua garagem está vazia.<br>Escolha seus favoritos acima.</p>';
    if (checkoutBtn) checkoutBtn.disabled = true;
  } else {
    body.innerHTML = cart.map(item => `
<div class="cart-item">
  <div class="cart-item-info">
    <div class="cart-item-name">${item.name}</div>
    <div class="cart-item-unit">${item.price} cada</div>
  </div>
  <div class="cart-item-right">
    <div class="cart-item-subtotal">${fmtPrice(item.priceNum * item.qty)}</div>
    <div class="qty-controls" role="group" aria-label="Quantidade de ${item.name}">
      <button class="qty-btn" data-name="${item.name}" data-delta="-1" aria-label="Remover um">&#8722;</button>
      <span class="qty-value">${item.qty}</span>
      <button class="qty-btn" data-name="${item.name}" data-delta="1" aria-label="Adicionar mais um">&#43;</button>
    </div>
  </div>
</div>`).join('\n');

    if (checkoutBtn) checkoutBtn.disabled = false;
  }

  if (totalEl) totalEl.textContent = fmtPrice(getTotal());
}


/* ─────────────────────────────────────────
   ABRIR / FECHAR CARRINHO
───────────────────────────────────────── */

function openCart() {
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.classList.remove('no-scroll');
}


/* ─────────────────────────────────────────
   CHECKOUT VIA WHATSAPP
   Monta a mensagem com o resumo do pedido
   e abre a conversa direto no WhatsApp.
───────────────────────────────────────── */

function checkout() {
  if (cart.length === 0) return;

  const linhas = cart.map(item =>
    `• ${item.qty}x ${item.name} — ${item.price}`
  );

  const total   = fmtPrice(getTotal());
  const message = `Olá! Gostaria de fazer um pedido:\n\n${linhas.join('\n')}\n\nTotal: ${total}`;

  window.open(`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}


/* ─────────────────────────────────────────
   MENU MOBILE
───────────────────────────────────────── */

function initMobileMenu() {
  const btn   = document.getElementById('navHamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
    });
  });
}


/* ─────────────────────────────────────────
   NAVBAR SCROLL
───────────────────────────────────────── */

function initScrollEffect() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}


/* ─────────────────────────────────────────
   CARROSSEL NAVEGAÇÃO (setas)
───────────────────────────────────────── */

function initCarouselArrows() {
  const list = document.getElementById('menuList');
  const btnPrev = document.getElementById('carouselPrev');
  const btnNext = document.getElementById('carouselNext');

  if (!list || !btnPrev || !btnNext) return;

  const scroll = (direction) => {
    // Detecta tamanho do card dinamicamente
    const isMobile = window.innerWidth <= 600;
    const cardWidth = isMobile
      ? window.innerWidth - 100  // 1 card por vez em mobile
      : 260;                     // 4 cards em desktop

    list.scrollBy({
      left: direction === 'prev' ? -cardWidth : cardWidth,
      behavior: 'smooth'
    });
  };

  btnPrev.addEventListener('click', () => scroll('prev'));
  btnNext.addEventListener('click', () => scroll('next'));
}


/* ─────────────────────────────────────────
   STATUS AO VIVO (horário de funcionamento)
───────────────────────────────────────── */

function updateStatus() {
  const now = new Date();
  const day = now.getDay();   // 0 = domingo … 6 = sábado
  const t   = now.getHours() * 60 + now.getMinutes();

  const HORARIOS = {
    'ter-sex': { abre: 18*60+30, fecha: 22*60+30 },
    sab:       { abre: 18*60,    fecha: 23*60    },
    dom:       { abre: 18*60,    fecha: 22*60    },
  };

  let aberto = false;
  if      (day >= 2 && day <= 5) aberto = t >= HORARIOS['ter-sex'].abre && t < HORARIOS['ter-sex'].fecha;
  else if (day === 6)            aberto = t >= HORARIOS.sab.abre        && t < HORARIOS.sab.fecha;
  else if (day === 0)            aberto = t >= HORARIOS.dom.abre        && t < HORARIOS.dom.fecha;

  const pill = document.getElementById('statusAoVivo');
  if (!pill) return;

  if (aberto) {
    pill.textContent = 'Aberto agora';
    pill.className   = 'status-pill open';
  } else if (day === 1) {
    pill.textContent = 'Fechado hoje — segunda';
    pill.className   = 'status-pill closed';
  } else {
    pill.textContent = 'Fechado no momento';
    pill.className   = 'status-pill closed';
  }
}


/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  // Renderiza o cardápio antes de vincular eventos
  renderMenu();
  syncCartUI();

  // Filtro de categorias
  initTabs();

  // Nav
  initMobileMenu();
  initScrollEffect();

  // Carrossel
  initCarouselArrows();

  // Status de funcionamento
  updateStatus();
  setInterval(updateStatus, 60_000);

  // ── Evento: adicionar item ao carrinho ──
  document.getElementById('menuList')?.addEventListener('click', e => {
    const btn = e.target.closest('.btn-add');
    if (!btn) return;

    addToCart(btn.dataset.name, btn.dataset.price);

    btn.textContent = 'Adicionado ✓';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = 'Quero Esse';
      btn.classList.remove('added');
    }, 1600);
  });

  // ── Evento: controles de quantidade no carrinho ──
  document.getElementById('cartItems')?.addEventListener('click', e => {
    const btn = e.target.closest('.qty-btn');
    if (!btn) return;
    changeQty(btn.dataset.name, parseInt(btn.dataset.delta, 10));
  });

  // ── Evento: abrir carrinho (botão na navbar) ──
  document.getElementById('navCartBtn')?.addEventListener('click', openCart);

  // ── Evento: abrir carrinho (botão na seção CTA) ──
  document.getElementById('btnAbrirCarrinho')?.addEventListener('click', openCart);

  // ── Evento: fechar carrinho ──
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);

  // ── Evento: finalizar pedido via WhatsApp ──
  document.getElementById('btnCheckout')?.addEventListener('click', checkout);

  // Fechar com Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCart();
  });

});
