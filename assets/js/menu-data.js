/*
 * menu-data.js — Cardápio da Garagem Hambúrguer
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  Para atualizar preços ou adicionar itens,               ║
 * ║  edite APENAS este arquivo.                              ║
 * ║  Nenhum conhecimento de HTML ou CSS é necessário.        ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * Campos de cada item:
 *
 *  cat         — categoria do filtro
 *                  'hamburgers' | 'combos' | 'porcoes' | 'bebidas'
 *  name        — nome exibido no card
 *  desc        — ingredientes / descrição
 *  price       — preço (string): 'R$ XX,XX'
 *  emoji       — ícone exibido enquanto não houver foto
 *  image       — caminho da foto real (null = usa emoji)
 *                  ex: 'assets/images/products/corvette.jpg'
 *  badge       — texto do badge no nome (null = sem badge)
 *  badgeClass  — classe extra do badge: 'gold' para dourado sólido
 *  footerBadge — badge secundário no rodapé do card
 *  highlight   — true = card com borda e glow dourado de destaque
 */

const MENU_DATA = [

  /* ──────────────────────────────────────────
     HAMBÚRGUERES
  ────────────────────────────────────────── */
  {
    cat:      'hamburgers',
    name:     'Corvette',
    badge:    'N.1 em pedidos',
    featured: true,
    desc:     'Blend bovino 170g, queijo mussarela, bacon, cebola caramelizada, tomate, alface e maionese caseira. Pão brioche.',
    price:    'R$ 32,00',
    emoji:    '🍔',
    image:    'assets/images/products/corvette.png',
  },
  {
    cat:   'hamburgers',
    name:  'Garagem',
    desc:  'Blend bovino 150g, queijo mussarela, tomate, alface e maionese caseira. Pão brioche.',
    price: 'R$ 29,00',
    emoji: '🍔',
    image: 'assets/images/products/img-icon.jpg',
  },
  {
    cat:      'hamburgers',
    name:     'Cadillac',
    badge:    'Favorito',
    featured: true,
    desc:     'Picanha, blend bovino 120g, queijo mussarela, cebola, tomate, rúcula e maionese caseira. Pão brioche.',
    price:    'R$ 36,00',
    emoji:    '🍔',
    image:    'assets/images/products/cadillac.png',
  },
  {
    cat:      'hamburgers',
    name:     'Landau',
    badge:    'Favorito',
    featured: true,
    desc:     '3 smash burgers blend bovino 60g, 3 queijos cheddar, bacon e maionese caseira. Pão brioche.',
    price:    'R$ 39,00',
    emoji:    '🍔',
    image:    null,
  },
  {
    cat:   'hamburgers',
    name:  'Comodoro',
    desc:  'Blend bovino 150g, queijo cheddar, bacon e doce de leite. Pão brioche, maionese caseira.',
    price: 'R$ 32,00',
    emoji: '🍔',
    image: 'assets/images/products/img-icon.jpg',
  },
  {
    cat:   'hamburgers',
    name:  'Mustang',
    desc:  'Blend bovino 150g, queijo mussarela, ovo, tomate, alface e maionese caseira. Pão brioche.',
    price: 'R$ 34,00',
    emoji: '🍔',
    image: 'assets/images/products/maverick.png',
  },
  {
    cat:   'hamburgers',
    name:  'Alfa Romeu',
    desc:  'Mignon 150g, queijo mussarela, cebola roxa, tomate, agrião e maionese caseira. Pão brioche.',
    price: 'R$ 39,00',
    emoji: '🍔',
    image: 'assets/images/products/alfa-romeu.png',
  },
  {
    cat:   'hamburgers',
    name:  'Mercedes',
    desc:  'Blend bovino 120g, 3 anéis de cebola, queijo cheddar e maionese caseira. Pão brioche.',
    price: 'R$ 36,00',
    emoji: '🍔',
    image: 'assets/images/products/img-icon.jpg',
  },
  {
    cat:   'hamburgers',
    name:  'Aero Willys',
    desc:  '2 blend bovino 100g, queijo mussarela, tomate, agrião e barbecue. Pão brioche.',
    price: 'R$ 39,00',
    emoji: '🍔',
    image: 'assets/images/products/img-icon.jpg',
  },
  {
    cat:   'hamburgers',
    name:  'Rolls-Royce',
    desc:  'Blend bovino 120g, queijo coalho, bacon, tomate, alface e maionese caseira. Pão brioche.',
    price: 'R$ 39,00',
    emoji: '🍔',
    image: 'assets/images/products/rolls-royce.png',
  },
  {
    cat:   'hamburgers',
    name:  'Maserati',
    desc:  'Frango KFC, queijo cheddar, cebola, tomate, alface e maionese caseira. Pão brioche.',
    price: 'R$ 39,00',
    emoji: '🍔',
    image: 'assets/images/products/img-icon.jpg',
  },
  {
    cat:   'hamburgers',
    name:  'Aston Martin',
    desc:  'Blend bovino 150g, queijo cheddar, bacon em cubos, creme cheddar caseiro, doritos e maionese caseira.',
    price: 'R$ 36,00',
    emoji: '🍔',
    image: 'assets/images/products/aston-martin.png',
  },
  {
    cat:   'hamburgers',
    name:  'Escalade',
    desc:  'Blend bovino 150g, queijo mussarela, bacon, geleia de pimenta, tomate, rúcula e maionese caseira. Pão brioche.',
    price: 'R$ 42,00',
    emoji: '🍔',
    image: 'assets/images/products/escalade.png',
  },
  {
    cat:   'hamburgers',
    name:  'Mercury Coupé',
    desc:  'Blend bovino 150g, queijo mussarela empanado, bacon em tiras e barbecue. Pão brioche.',
    price: 'R$ 39,00',
    emoji: '🍔',
    image: 'assets/images/products/mercury-coupe.png',
  },
  {
    cat:   'hamburgers',
    name:  'Dodge Dart',
    desc:  '2 smash burgers blend bovino, queijo cheddar, bacon trançado, geleia de pimenta agridoce, rúcula e tomate.',
    price: 'R$ 42,00',
    emoji: '🍔',
    image: 'assets/images/products/dodge-dart.png',
  },
  {
    cat:   'hamburgers',
    name:  'Morgan Aero',
    desc:  'Blend bovino 150g, queijo coalho no mel, queijo mussarela, abacaxi grelhado, bacon em tiras e maionese. Pão brioche.',
    price: 'R$ 45,00',
    emoji: '🍔',
    image: 'assets/images/products/img-icon.jpg',
  },
  {
    cat:   'hamburgers',
    name:  'Kids',
    desc:  'Blend bovino 120g, queijo mussarela e maionese caseira. Pão brioche.',
    price: 'R$ 24,00',
    emoji: '🍔',
    image: 'assets/images/products/img-icon.jpg',
  },

  /* ──────────────────────────────────────────
     COMBOS
  ────────────────────────────────────────── */
  {
    cat:         'combos',
    name:        'Combo Meu',
    badge:       'MAIS VENDIDO',
    badgeClass:  'gold',
    desc:        '1 Corvette + 100gr Anéis de Cebola + 100gr Batata com Cheddar e Bacon + 1 Coca Lata',
    price:       'R$ 49,90',
    emoji:       '🍔🍟🥤',
    image:       null,
    footerBadge: 'Economize R$ 8,90',
    highlight:   true,
  },
  {
    cat:         'combos',
    name:        'Combo 2 Corvette',
    badge:       'POPULAR',
    desc:        '2 Corvette + 2 Refri Lata + 50gr Batata cada lanche',
    price:       'R$ 76,00',
    emoji:       '🍔🍔🥤🥤',
    image:       null,
  },

  /* ──────────────────────────────────────────
     OS MAIS PEDIDOS (Seleção de destaque)
  ────────────────────────────────────────── */
  {
    cat:   'top',
    name:  'Corvette',
    badge: 'TOP',
    desc:  'Blend bovino 170g, queijo mussarela, bacon, cebola caramelizada, tomate, alface e maionese caseira. Pão brioche.',
    price: 'R$ 32,00',
    emoji: '🍔',
    image: 'assets/images/products/img-icon.jpg',
  },
  {
    cat:   'top',
    name:  'Coca-Cola Original 350ml',
    desc:  'Lata 350ml',
    price: 'R$ 7,00',
    emoji: '🥤',
    image: 'assets/images/products/coca-original-350ml.jpg',
  },
  {
    cat:   'top',
    name:  'Cadillac',
    badge: 'FAVORITO',
    desc:  'Picanha, blend bovino 120g, queijo mussarela, cebola, tomate, rúcula e maionese caseira. Pão brioche.',
    price: 'R$ 36,00',
    emoji: '🍔',
    image: 'assets/images/products/img-icon.jpg',
  },
  {
    cat:   'top',
    name:  'Landau',
    badge: 'FAVORITO',
    desc:  '3 smash burgers blend bovino 60g, 3 queijos cheddar, bacon e maionese caseira. Pão brioche.',
    price: 'R$ 39,00',
    emoji: '🍔',
    image: 'assets/images/products/img-icon.jpg',
  },
  {
    cat:   'top',
    name:  'Combo Meu',
    badge: 'MAIS VENDIDO',
    badgeClass: 'gold',
    desc:  'Corvette + 3 Anéis de Cebola + Batata Frita + Coca-Cola 350ml',
    price: 'R$ 49,90',
    emoji: '🍔🍟🥤',
    image: 'assets/images/products/img-icon.jpg',
    footerBadge: 'Economize R$ 8,90',
    highlight: true,
  },
  {
    cat:   'top',
    name:  'Kids',
    desc:  'Blend bovino 120g, queijo mussarela e maionese caseira. Pão brioche.',
    price: 'R$ 24,00',
    emoji: '🍔',
    image: 'assets/images/products/img-icon.jpg',
  },

  /* ──────────────────────────────────────────
     SURREAIS PORÇÕES
  ────────────────────────────────────────── */
  {
    cat:   'porcoes',
    name:  'Batata Crinkle',
    desc:  'Generosos 500g de batatas em formato crinkle com cheddar e bacon.',
    price: 'R$ 28,00',
    emoji: '🍟',
    image: 'assets/images/products/img-icon.jpg',
  },
  {
    cat:   'porcoes',
    name:  'Polenta',
    desc:  'Polenta cremosa e queijo derretido de qualidade superior.',
    price: 'R$ 26,00',
    emoji: '🥣',
    image: 'assets/images/products/img-icon.jpg',
  },
  {
    cat:   'porcoes',
    name:  'Tábua de Carne',
    desc:  '200g picanha, 200g batatas, 200g calabresa, 200g frango, 200g anéis de cebola.',
    price: 'R$ 80,00',
    emoji: '🍖',
    image: 'assets/images/products/img-icon.jpg',
  },
  {
    cat:   'porcoes',
    name:  'Frango Crocante',
    desc:  '500g de frango empanado com molho verde.',
    price: 'R$ 28,00',
    emoji: '🍗',
    image: 'assets/images/products/img-icon.jpg',
  },

  /* ──────────────────────────────────────────
     BEBIDAS
  ────────────────────────────────────────── */
  {
    cat:   'bebidas',
    name:  'Refrigerante Original Coca Cola 2l',
    desc:  'Ref. Coca Cola Normal 2lts',
    price: 'R$ 18,00',
    emoji: '🥤',
    image: 'assets/images/products/coca-2l.jpg',
  },
  {
    cat:   'bebidas',
    name:  'Coca-Cola sem Açúcar 350ml',
    desc:  'Lata 350ml',
    price: 'R$ 8,00',
    emoji: '🥤',
    image: 'assets/images/products/coca-zero-350ml.webp',
  },
  {
    cat:   'bebidas',
    name:  'Fanta Laranja 350ml',
    desc:  'Lata 350ml',
    price: 'R$ 7,00',
    emoji: '🥤',
    image: 'assets/images/products/fanta-laranja-350ml.webp',
  },
  {
    cat:   'bebidas',
    name:  'Coca-Cola Original 600ml',
    desc:  'Garrafa 600ml',
    price: 'R$ 9,00',
    emoji: '🥤',
    image: 'assets/images/products/coca-original-600ml.webp',
  },
  {
    cat:   'bebidas',
    name:  'Refrigerante Guaraná Antarctica 350ml',
    desc:  'Lata 350ml',
    price: 'R$ 7,00',
    emoji: '🥤',
    image: 'assets/images/products/guarana-antarctica-350ml.png',
  },
  {
    cat:   'bebidas',
    name:  'Coca-Cola Original 350ml',
    desc:  'Lata 350ml',
    price: 'R$ 7,00',
    emoji: '🥤',
    image: 'assets/images/products/coca-original-350ml.jpg',
  },
  {
    cat:   'bebidas',
    name:  'Coca 600ml Zero',
    desc:  'Garrafa 600ml',
    price: 'R$ 10,00',
    emoji: '🥤',
    image: 'assets/images/products/coca-zero-600ml.webp',
  },
];
