const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
  }
  
  
  console.log("1--->",producto);

  //Agregar nuevas propiedades al objeto
  producto.imagen = "image.jpg";

  console.log("2--->",producto);

  //Eliminar la propiedad del objeto
  delete producto.disponible;