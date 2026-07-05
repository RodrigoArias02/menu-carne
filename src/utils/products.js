import combos from "../assets/combo.png";
import burguer from "../assets/iconoburguer.png";
import chori from "../assets/chori.png";
import vaca from "../assets/vaca.png";
import pollo from "../assets/gallina.png";
import milas from "../assets/milanesas.png";
export const products = [
  {
    id: 1,
    name: "Milanesas de Pollo Rebozadas",
    subtitle: "Preparadas artesanalmente",
    description: "Milanesas tiernas listas para cocinar.",
    price: 1200,
    offer: { kg: 2, price: 2100 },
    category: "milanesas",
    image: "https://carneya.com.ar/wp-content/uploads/2024/03/milanesa-de-pollo-01.webp",
  },
  {
    id: 2,
    name: "Milanesas de Carne Vacuna",
    subtitle: "Corte premium",
    description: "Milanesas elaboradas con nalga seleccionada.",
    price: 1500,
    offer: { kg: 2, price: 2700 },
    category: "milanesas",
    image: "https://acdn-us.mitiendanube.com/stores/003/087/133/products/milanesas-de-c76d65bb0b0bc3dfc217128641403679-1024-1024.webp",
  },
  {
    id: 3,
    name: "Milanesas Rellenas",
    subtitle: "Lista para horno",
    description: "Con jamón y mozzarella.",
    price: 1800,
    offer: null,
    category: "milanesas",
    image: "https://www.crujen.com.ar/images/productos/crujen/medium/image2022081413132091586.jpg",
  },
  {
    id: 4,
    name: "Hamburguesas Clásicas",
    subtitle: "4 unidades",
    description: "Blend de carne vacuna seleccionada.",
    price: 1800,
    offer: { kg: 2, price: 3200 },
    category: "hamburguesas",
    image: "https://acdn-us.mitiendanube.com/stores/003/087/133/products/28-87d81c47962baa103c17234880082479-1024-1024.webp",
  },
  {
    id: 5,
    name: "Hamburguesas Rellenas",
    subtitle: "4 Pack - Premium Blend",
    description: "Rellena de panceta ahumada jamon y queso provolone",
    price: 2200,
    offer: { kg: 2, price: 3900 },
    category: "hamburguesas",
    image: "https://img.freepik.com/fotos-premium/hamburguesas-carne-cruda-empanadas-carne-molida-tomillo-sobre-tabla-cortar-madera-fondo-madera-oscura-vista-superior_89816-27893.jpg",
  },
  {
    id: 6,
    name: "Hamburguesas de Pollo",
    subtitle: "Hamburguesa de pollo y verdeo",
    description: "Hamburguesa de pollo saborizada con verdeo",
    price: 1600,
    offer: null,
    category: "hamburguesas",
    image: "https://granjaselpato.com.ar/wp-content/uploads/2021/05/hamb-verdeo-2.jpg",
  },
  {
    id: 7,
    name: "Pechuga de Pollo",
    subtitle: "Sin hueso",
    description: "Ideal para milanesas o a la plancha.",
    price: 1900,
    offer: { kg: 2, price: 3500 },
    category: "pollo",
    image: "https://www.shutterstock.com/image-photo/raw-chicken-breast-bone-skin-260nw-2358056743.jpg",
  },
  {
    id: 8,
    name: "Suprema de Pollo",
    subtitle: "Fresca del día",
    description: "Corte premium de pollo.",
    price: 2100,
    offer: null,
    category: "pollo",
    image: "https://media.istockphoto.com/id/1074830312/es/foto/pechuga-de-pollo-org%C3%A1nico-crudo.jpg?s=612x612&w=0&k=20&c=-dCyN8Iks0MqGSwcFBO5TOWcVXMsJkNLBdyoSS2Ei1w=",
  },
  {
    id: 9,
    name: "Pata y muslo",
    subtitle: "3kg de pata y muslo",
    description: "Perfectas para los más chicos.",
    price: 1700,
    offer: { kg: 3, price: 3000 },
    category: "pollo",
    image: "https://acdn-us.mitiendanube.com/stores/003/087/133/products/pata-y-muslo-8ad3129d544b1eee7217128517940397-1024-1024.webp",
  },
  {
    id: 10,
    name: "Alitas Marinadas",
    subtitle: "Listas para horno",
    description: "Marinadas con especias caseras.",
    price: 1800,
    offer: null,
    category: "pollo",
    image: "/images/alitas.jpg",
  },
  {
    id: 11,
    name: "Carne Picada Especial",
    subtitle: "100% vacuna",
    description: "Ideal para hamburguesas y albóndigas.",
    price: 1400,
    offer: { kg: 2, price: 2500 },
    category: "carne",
    image: "https://acdn-us.mitiendanube.com/stores/003/087/133/products/carne-picada-001dcf00a982bc722c17442951212844-1024-1024.webp",
  },
  {
    id: 12,
    name: "Bife de Chorizo",
    subtitle: "Corte premium",
    description: "Tierno y jugoso para la parrilla.",
    price: 2800,
    offer: null,
    category: "carne",
    image: "https://raffe.com.ar/wp-content/uploads/2019/06/Bife-de-Chorizo-Raffe.jpg",
  },
  {
    id: 13,
    name: "Vacío",
    subtitle: "Especial parrilla",
    description: "Uno de los cortes favoritos de los argentinos.",
    price: 2600,
    offer: { kg: 2, price: 4700 },
    category: "carne",
    image: "https://carnesargentinas.es/wp-content/uploads/2020/05/vacio-entero-1.jpg",
  },
  {
    id: 14,
    name: "Asado de Tira",
    subtitle: "Corte tradicional",
    description: "Perfecto para reuniones familiares.",
    price: 2500,
    offer: null,
    category: "carne",
    image: "https://thumbs.dreamstime.com/b/asado-crudo-8478920.jpg",
  },
  {
    id: 15,
    name: "Chorizo Criollo",
    subtitle: "Receta tradicional",
    description: "Ideal para parrilla o choripanes.",
    price: 1900,
    offer: { kg: 2, price: 3400 },
    category: "chorizos",
    image: "/images/chorizo.jpg",
  },
  {
    id: 16,
    name: "Chorizo Bombón",
    subtitle: "Tamaño cocktail",
    description: "Perfecto para picadas y eventos.",
    price: 2100,
    offer: null,
    category: "chorizos",
    image: "/images/chorizo-bombon.jpg",
  },
  {
    id: 17,
    name: "Chorizo Especial",
    subtitle: "Con especias seleccionadas",
    description: "Sabor intenso y artesanal.",
    price: 2200,
    offer: { kg: 2, price: 4000 },
    category: "chorizos",
    image: "/images/chorizo-especial.jpg",
  },
  {
    id: 18,
    name: "Combo Parrillero",
    subtitle: "Para 4 personas",
    description: "Asado, chorizos y morcillas.",
    price: 8500,
    offer: null,
    category: "combos",
    image: "/images/combo-parrilla.jpg",
  },
  {
    id: 19,
    name: "Combo Hamburguesero",
    subtitle: "Ideal para reuniones",
    description: "12 hamburguesas + panes.",
    price: 7200,
    offer: null,
    category: "combos",
    image: "/images/combo-burger.jpg",
  },
  {
    id: 20,
    name: "Combo Familiar",
    subtitle: "Variedad para toda la familia",
    description: "Pollo, milanesas y hamburguesas.",
    price: 9800,
    offer: null,
    category: "combos",
    image: "/images/combo-familiar.jpg",
  },
];

export const categoryOrder = {
  milanesas: ["Rebozadas artesanalmente y listas para cocinar."],
  hamburguesas: ["Blends premium con todo el sabor de la carne vacuna."],
  pollo: ["Pollo fresco y preparado con la mejor calidad."],
  carne: ["Cortes seleccionados para cada ocasión."],
  chorizos: ["Tradición, sabor y calidad para tu parrilla."],
  combos: ["Más variedad y ahorro en una sola compra."],
};
export const categories = [
  { id: "milanesas", name: "Milanesas", image: milas },
  { id: "hamburguesas", name: "Hamburguesas", image: burguer },
  { id: "pollo", name: "Aves", image: pollo },
  { id: "carne", name: "Carne Vacuna", image: vaca },
  { id: "chorizos", name: "Chorizos", image: chori },
  { id: "combos", name: "Combos", image: combos },
];
export default function agruparProductos(products) {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }

    acc[product.category].push(product);

    return acc;
  }, {});
}
export const precioOfertaPorKg=(product)=>{
  return  condicionOferta(product) ? product.offer.price / product.offer.kg : "";
}
export const precioNormalPorKg=(product)=>{
  return  product.price*product.quantity;
}
export const descuentoPorProducto = (product)=>{
  let descuento;
  if(condicionOferta(product)){
    descuento=product.price*product.quantity-(precioOfertaPorKg(product))*product.quantity;
  }
  console.log("descuento por producto",descuento)
  return descuento
}
export const descuentoTotalProductos = (cart)=>{
  let descuento=0;
  cart.forEach(product => {
    if(condicionOferta(product)){
      descuento=descuento+descuentoPorProducto(product)
    }
  });

  return descuento
}
export const porcentajeDescuento = (product) =>{
 let porc = condicionOferta(product) ? "-" + Math.round(((product.price - precioOfertaPorKg(product)) / product.price) * 100) + "%" : "";

  return porc
}
export const precioTotalOfertaPorProducto=(product)=>{
  return condicionOferta(product) ? (precioOfertaPorKg(product)) * product.quantity : product.price * product.quantity;
}
export const condicionOferta=(product)=>{
  if(product.offer!=null && product.quantity >= product.offer.kg){
    return true
  }else{
    return false
  }
}
export const totalPrecioProductos = (cart)=>{
  let total=0;
  cart.forEach(product => {
    if(condicionOferta(product)){
      total=total+precioTotalOfertaPorProducto(product)
    }else{
      total=total+precioNormalPorKg(product)
    }
  });
  return total
}