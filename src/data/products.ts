export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  categoryLabel: string;
  image: string;
  availableWholesale: boolean;
  whatsappMessage: string;
  badge?: string;
}

export const categories = [
  { id: "queso-fresco", label: "Queso Fresco", icon: "🧀" },
  { id: "queso-madurado", label: "Queso Madurado", icon: "🧀" },
  { id: "queso-pila", label: "Queso en Pila", icon: "🧀" },
  { id: "queso-especial", label: "Quesos Especiales", icon: "🧀" },
  { id: "lacteos", label: "Lácteos", icon: "🥛" },
]

export const products: Product[] = [
  {
    id: "queso-fresco",
    name: "Queso Fresco Semigraso",
    description: "Queso fresco suave, ideal para ensaladas, ceviches y preparaciones diarias.",
    longDescription: "Queso fresco semigraso de textura suave y cremosa, elaborado con leche pasteurizada de alta calidad. Perfecto para ensaladas, ceviches, empanadas y preparaciones cotidianas. Disponible en pilas completas para comercios y restaurantes, con formato ideal para revendedores y grandes volúmenes.",
    category: "queso-fresco",
    categoryLabel: "Queso Fresco",
    image: "/images/quesos-gourmet.jpg",
    availableWholesale: true,
    whatsappMessage: "Hola, me interesa Queso Fresco Semigraso al por mayor. ¿Cuál es el precio por volumen?",
    badge: "Disponible al por mayor"
  },
  {
    id: "queso-mozzarella",
    name: "Queso Mozzarella",
    description: "Mozzarella en bloques envasados al vacío, ideal para pizzas y preparaciones gourmet.",
    longDescription: "Queso Mozzarella de primera calidad en formato de bloques envasados al vacío (1 kg y 500 g). Textura compacta y color marfil pálido, ideal para pizzas, lasagnas, gratinados y preparaciones gourmet. Disponible en presentaciones individuales y al por mayor para restaurantes y comercios.",
    category: "queso-fresco",
    categoryLabel: "Queso Fresco",
    image: "/images/quesos-gourmet.jpg",
    availableWholesale: true,
    whatsappMessage: "Hola, me interesa Queso Mozzarella al por mayor. ¿Qué volúmenes tienen disponibles?",
    badge: "Envase al vacío"
  },
  {
    id: "queso-madurado",
    name: "Queso Madurado / Curado",
    description: "Queso madurado con sabor intenso, perfecto para sandwichs, pizzas y platos gourmet.",
    longDescription: "Queso madurado con carácter y sabor intenso, resultado de un proceso de curación cuidadoso que concentra los aromas naturales. Perfecto para sandwichs, pizzas, tablas de quesos y platos gourmet. Venta en pilas disponibles para restaurantes y revendedores que buscan calidad y consistencia.",
    category: "queso-madurado",
    categoryLabel: "Queso Madurado",
    image: "/images/quesos-gourmet.jpg",
    availableWholesale: true,
    whatsappMessage: "Hola, me interesa Queso Madurado al por mayor. ¿Qué volúmenes tienen disponibles?",
    badge: "Disponible al por mayor"
  },
  {
    id: "queso-semiduro",
    name: "Queso Semiduro",
    description: "Queso semiduro versátil, excelente para gratinados, lasagnas y preparaciones al horno.",
    longDescription: "Queso semiduro versátil de textura firme pero flexible, excelente para gratinados, lasagnas, preparaciones al horno y platos donde se necesita un queso que mantenga su forma. Disponible al por mayor para restaurantes, panaderías y comercios que requieren consistencia en sus preparaciones.",
    category: "queso-madurado",
    categoryLabel: "Queso Madurado",
    image: "/images/quesos-gourmet.jpg",
    availableWholesale: true,
    whatsappMessage: "Hola, me interesa Queso Semiduro al por mayor. ¿Pueden darme cotización?",
    badge: "Disponible al por mayor"
  },
  {
    id: "queso-pila",
    name: "Queso en Pila",
    description: "Pilas completas de queso para comercios y restaurantes. Formato ideal para revendedores.",
    longDescription: "Pilas completas de queso presentadas en formato bulk/stacks, la opción más económica para comercios, restaurantes y revendedores que compran en grandes volúmenes. Formato ideal para maximizar rentabilidad, con variedades de queso fresco y madurado disponibles en pila. Entrega directa a tu negocio.",
    category: "queso-pila",
    categoryLabel: "Queso en Pila",
    image: "/images/quesos-gourmet.jpg",
    availableWholesale: true,
    whatsappMessage: "Hola, necesito queso en pila. ¿Qué variedades tienen y cuál es el precio por pila?",
    badge: "Formato Bulk"
  },
  {
    id: "queso-pesto",
    name: "Queso Fresco con Pesto y Hierbas",
    description: "Rueda de queso fresco con cobertura de pesto y hierbas frescas. Sabor gourmet artesanal.",
    longDescription: "Queso fresco en formato rueda con cobertura verde intensa de pesto, cilantro y hierbas frescas. Textura granulosa visible que aporta un sabor gourmet artesanal. Ideal para tablas de quesos, presentaciones especiales y clientes que buscan productos diferenciados. Disponible al por mayor.",
    category: "queso-especial",
    categoryLabel: "Quesos Especiales",
    image: "/images/quesos-gourmet.jpg",
    availableWholesale: true,
    whatsappMessage: "Hola, me interesa Queso con Pesto y Hierbas al por mayor. ¿Cuál es el precio?",
    badge: "Gourmet"
  },
  {
    id: "queso-tricolor",
    name: "Queso Tricolor",
    description: "Rueda de queso segmentada en tres secciones: verde hierba, blanco natural y amarillo suave.",
    longDescription: "Queso fresco en formato rueda tricolor, segmentado en tres secciones de colores: verde hierba (pesto/cilantro), blanco natural (queso fresco puro) y amarillo suave (cúrcuma/pimentón). Presentación visual impactante, ideal para tablas de quesos, eventos y clientes que buscan variedad en un solo producto.",
    category: "queso-especial",
    categoryLabel: "Quesos Especiales",
    image: "/images/quesos-gourmet.jpg",
    availableWholesale: true,
    whatsappMessage: "Hola, me interesa Queso Tricolor al por mayor. ¿Tienen disponibilidad?",
    badge: "Gourmet"
  },
  {
    id: "queso-pimiento",
    name: "Queso Fresco con Pimiento",
    description: "Queso fresco con inclusiones rojas de pimientos secos y finas partículas de hierbas.",
    longDescription: "Queso fresco de pasta blanda con inclusiones rojas de pimientos secos y finas partículas de hierbas aromáticas. Sabor equilibrado entre la suavidad del queso fresco y el toque picante del pimiento. Excelente para sandwiches, ensaladas y presentaciones gourmet. Disponible al por mayor.",
    category: "queso-especial",
    categoryLabel: "Quesos Especiales",
    image: "/images/quesos-gourmet.jpg",
    availableWholesale: true,
    whatsappMessage: "Hola, me interesa Queso con Pimiento al por mayor. ¿Pueden cotizar?",
    badge: "Gourmet"
  },
  {
    id: "leche-entera",
    name: "Leche Entera Pasteurizada",
    description: "Leche entera pasteurizada en formato distribución. Envases de alta capacidad.",
    longDescription: "Leche entera pasteurizada en formato distribución mayorista, con envases de alta capacidad (1-2 litros) y sistema de cadena de frío profesional. Ideal para restaurantes, panaderías, comedores y negocios que requieren abastecimiento continuo y garantía de frescura. Entrega directa con manipulación higiénica.",
    category: "lacteos",
    categoryLabel: "Lácteos",
    image: "/images/leche-distribucion.jpg",
    availableWholesale: true,
    whatsappMessage: "Hola, necesito leche entera al por mayor. ¿Qué volúmenes tienen disponibles?",
    badge: "Distribución"
  },
  {
    id: "crema-leche",
    name: "Crema de Leche 4 kg",
    description: "Crema de leche en formato industrial de 4 kg. Ingrediente base para repostería y cocina.",
    longDescription: "Crema de leche en formato industrial de 4 kg, ingrediente base esencial para repostería, cocina profesional y preparaciones gastronómicas. Envases con tapa de seguridad y asa integrada, almacenamiento refrigerado profesional. Disponibilidad permanente para restaurantes, panaderías e industrias alimenticias.",
    category: "lacteos",
    categoryLabel: "Lácteos",
    image: "/images/crema-leche.jpg",
    availableWholesale: true,
    whatsappMessage: "Hola, necesito crema de leche al por mayor. ¿Cuál es el precio por volumen?",
    badge: "4 kg Industrial"
  },
]
