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
    image:    null,   // 'assets/images/products/corvette.jpg'
  },
  {
    cat:   'hamburgers',
    name:  'Garagem',
    desc:  'Blend bovino 150g, queijo mussarela, tomate, alface e maionese caseira. Pão brioche.',
    price: 'R$ 29,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:      'hamburgers',
    name:     'Cadillac',
    badge:    'Favorito',
    featured: true,
    desc:     'Picanha, blend bovino 120g, queijo mussarela, cebola, tomate, rúcula e maionese caseira. Pão brioche.',
    price:    'R$ 36,00',
    emoji:    '🍔',
    image:    null,   // 'assets/images/products/cadillac.jpg'
  },
  {
    cat:      'hamburgers',
    name:     'Landau',
    badge:    'Favorito',
    featured: true,
    desc:     '3 smash burgers blend bovino 60g, 3 queijos cheddar, bacon e maionese caseira. Pão brioche.',
    price:    'R$ 39,00',
    emoji:    '🍔',
    image:    null,   // 'assets/images/products/landau.jpg'
  },
  {
    cat:   'hamburgers',
    name:  'Comodoro',
    desc:  'Blend bovino 150g, queijo cheddar, bacon e doce de leite. Pão brioche, maionese caseira.',
    price: 'R$ 32,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:   'hamburgers',
    name:  'Mustang',
    desc:  'Blend bovino 150g, queijo mussarela, ovo, tomate, alface e maionese caseira. Pão brioche.',
    price: 'R$ 34,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:   'hamburgers',
    name:  'Alfa Romeu',
    desc:  'Mignon 150g, queijo mussarela, cebola roxa, tomate, agrião e maionese caseira. Pão brioche.',
    price: 'R$ 39,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:   'hamburgers',
    name:  'Mercedes',
    desc:  'Blend bovino 120g, 3 anéis de cebola, queijo cheddar e maionese caseira. Pão brioche.',
    price: 'R$ 36,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:   'hamburgers',
    name:  'Aero Willys',
    desc:  '2 blend bovino 100g, queijo mussarela, tomate, agrião e barbecue. Pão brioche.',
    price: 'R$ 39,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:   'hamburgers',
    name:  'Rolls-Royce',
    desc:  'Blend bovino 120g, queijo coalho, bacon, tomate, alface e maionese caseira. Pão brioche.',
    price: 'R$ 39,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:   'hamburgers',
    name:  'Maserati',
    desc:  'Frango KFC, queijo cheddar, cebola, tomate, alface e maionese caseira. Pão brioche.',
    price: 'R$ 39,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:   'hamburgers',
    name:  'Aston Martin',
    desc:  'Blend bovino 150g, queijo cheddar, bacon em cubos, creme cheddar caseiro, doritos e maionese caseira.',
    price: 'R$ 36,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:   'hamburgers',
    name:  'Escalade',
    desc:  'Blend bovino 150g, queijo mussarela, bacon, geleia de pimenta, tomate, rúcula e maionese caseira. Pão brioche.',
    price: 'R$ 42,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:   'hamburgers',
    name:  'Mercury Coupé',
    desc:  'Blend bovino 150g, queijo mussarela empanado, bacon em tiras e barbecue. Pão brioche.',
    price: 'R$ 39,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:   'hamburgers',
    name:  'Dodge Dart',
    desc:  '2 smash burgers blend bovino, queijo cheddar, bacon trançado, geleia de pimenta agridoce, rúcula e tomate.',
    price: 'R$ 42,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:   'hamburgers',
    name:  'Morgan Aero',
    desc:  'Blend bovino 150g, queijo coalho no mel, queijo mussarela, abacaxi grelhado, bacon em tiras e maionese. Pão brioche.',
    price: 'R$ 45,00',
    emoji: '🍔',
    image: null,
  },
  {
    cat:   'hamburgers',
    name:  'Kids',
    desc:  'Blend bovino 120g, queijo mussarela e maionese caseira. Pão brioche.',
    price: 'R$ 24,00',
    emoji: '🍔',
    image: null,
  },

  /* ──────────────────────────────────────────
     COMBOS
  ────────────────────────────────────────── */
  {
    cat:         'combos',
    name:        'Combo Meu',
    badge:       'MAIS VENDIDO',
    badgeClass:  'gold',
    desc:        'Corvette (Pão Brioche, Bacon, Blend Bovino 170g, Queijo Mussarela, Cebola Caramelizada, Tomate, Alface e Maionese Caseira) + 3 Anéis de Cebola + Batata Frita + Coca-Cola 350ml',
    price:       'R$ 49,90',
    emoji:       '🍔🍟🥤',
    image:       null,
    footerBadge: 'Economize R$ 8,90',
    highlight:   true,
  },

  /* ──────────────────────────────────────────
     SURREAIS PORÇÕES
  ────────────────────────────────────────── */
  {
    cat:   'porcoes',
    name:  'Anéis de Cebola',
    desc:  '6 unidades crocantes, empanados na hora. Acompanha molho da casa.',
    price: 'R$ 18,00',
    emoji: '🧅',
    image: null,
  },
  {
    cat:   'porcoes',
    name:  'Batata Frita',
    desc:  'Batata palito crocante, temperada na hora. Porção individual generosa.',
    price: 'R$ 14,00',
    emoji: '🍟',
    image: null,
  },
  {
    cat:   'porcoes',
    name:  'Batata com Cheddar e Bacon',
    desc:  'Batata frita coberta com creme de cheddar caseiro e bacon crocante.',
    price: 'R$ 22,00',
    emoji: '🍟',
    image: null,
  },

  /* ──────────────────────────────────────────
     BEBIDAS
  ────────────────────────────────────────── */
  {
    cat:   'bebidas',
    name:  'Refrigerante Lata 350ml',
    desc:  'Coca-Cola, Guaraná Antarctica, Sprite ou Fanta. Bem gelada.',
    price: 'R$ 7,00',
    emoji: '🥤',
    image: null,
  },
  {
    cat:   'bebidas',
    name:  'Cerveja Lata 350ml',
    desc:  'Heineken, Amstel ou Skol. Para acompanhar como manda o figurino.',
    price: 'R$ 8,00',
    emoji: '🍺',
    image: null,
  },
  {
    cat:   'bebidas',
    name:  'Água Mineral 500ml',
    desc:  'Com ou sem gás.',
    price: 'R$ 4,00',
    emoji: '💧',
    image: null,
  },
];
