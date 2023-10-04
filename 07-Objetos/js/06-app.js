const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};

const {nombre, informacion: {fabricacion:{pais}},informacion:{medidas:{peso}}} = producto;

console.log(nombre);
console.log(nombre);
console.log(pais);
console.log(peso);
