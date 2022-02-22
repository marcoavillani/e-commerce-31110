export const products = [
  {
    name: "iPhone X",
    description: "Ya está viejo pero caro",
    stock: 10,
    price: 199000,
    category: "smartphones",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Apollo Twin Duo",
    description: "La mejor interfaz del mundo",
    stock: 5,
    price: 400000,
    category: "audio",
    image:
      "https://mlf1ksmo5k9f.i.optimole.com/nZ-EChY-0rJG9Y25/w:auto/h:auto/q:auto/https://www.b2bmusicstore.com.ar/wp-content/uploads/apollo-twin-x1.jpg",
  },
  {
    name: "Redmi Note 9",
    description: "Baratito",
    stock: 7,
    price: 70000,
    category: "smartphones",
    image:
      "https://images.fravega.com/f300/99255d47d5bace0b2f37460b589952a6.jpg.webp",
  },
  {
    name: "Moto G7",
    description: "Más o menos pero rinde",
    stock: 3,
    price: 25000,
    category: "smartphones",
    image: "https://i.blogs.es/cfb0fd/moto-g7-2/450_1000.jpg",
  },
  {
    name: "Renault Sandero Stepway",
    description: "1.6 0 Km 16V Intense CVT",
    stock: 3,
    price: 3000000,
    category: "cars",
    image:
      "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_be83491f7f09432e9b6196c59bf3e8f5.jpg",
  },
  {
    name: "Auriculares JBL",
    description: "Auriculares in-ear JBL Tune 110 black",
    stock: 20,
    price: 1800,
    category: "audio",
    image:
      "https://images.fravega.com/f300/25793d8e31a6ec2391b4510e9fbb94c8.jpg.webp",
  },
  {
    name: "Play Station 5",
    description: "Sony Play Station 5 825GB Digital Edition Black and White",
    stock: 5,
    price: 200000,
    category: "gaming",
    image: "https://i.blogs.es/86b11e/ps51/1366_2000.jpeg",
  },
  {
    name: "Notebook Lenovo IdeaPad",
    description: 'IdeaPad S145-15IIL platinum 15,6"',
    stock: "3",
    price: 110000,
    category: "computing",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_603387-MLA46621723245_072021-F.webp",
  },
  {
    name: "Toyota Corolla",
    description: "1.8 Se-g At 136cv Usado",
    stock: "1",
    price: 2000000,
    category: "cars",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_874709-MLA48896080881_012022-F.webp",
  },
  {
    name: "Nintendo Switch",
    description: "64 GB standard black and white",
    stock: "8",
    price: 95000,
    category: "gaming",
    image:
      "https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-neon-red-neon-blue-set/gallery/image02?v=2021120201",
  },
];
