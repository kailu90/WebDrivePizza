/**Mostrar menu versión mobile***/

const navBar = document.getElementById("nav_bar")
const menuBurguer = document.querySelector(".menu_hamburguesa")

/**Mostrar menu versión mobile validando estado de los 3 elementos: menu, carrito y modal***/

menuBurguer.addEventListener("click", function(){mostrarMenu(navBar,"flex")})

function mostrarMenu(elemento,propiedadDisplay){  
  if(elemento == navBar) {    
    if(elemento.style.display == "") {
        elemento.style.display = propiedadDisplay
        carrito.style.display = "none"   
        modal.style.display = "none"      
      } else if(elemento.style.display == "none") {
        elemento.style.display = propiedadDisplay 
        carrito.style.display = "none" 
        modal.style.display = "none"           
      } else if(elemento.style.display == propiedadDisplay) {
        elemento.style.display = "none"  
        carrito.style.display = "none" 
        modal.style.display = "none"     
      }    
  }
  if(elemento == carrito) {    
    if(elemento.style.display == "") {
        elemento.style.display = propiedadDisplay
        /*navBar.style.display = "none"  */
        modal.style.display = "none" 
      } else if(elemento.style.display == "none") {
        elemento.style.display = propiedadDisplay 
        /*navBar.style.display = "none"   */
        modal.style.display = "none"         
      } else if (elemento.style.display == propiedadDisplay) {
        elemento.style.display = "none"  
        /*navBar.style.display = "none" */
        modal.style.display = "none"     
      }
  }
  if(elemento == modal) {    
    if(elemento.style.display == "") {
        console.log("entrandomodal")
        elemento.style.display = propiedadDisplay
        /*navBar.style.display = "none"*/   
        carrito.style.display = "none"      
      } else if(elemento.style.display == "none") {
        elemento.style.display = propiedadDisplay 
        /*navBar.style.display = "none"*/          
      } else if (elemento.style.display == propiedadDisplay) {
        elemento.style.display = "none"  
       /*navBar.style.display = "none"*/    
      } else if (propiedadDisplay == "none"){
        elemento.style.display = "none"
      }
  } 
}

/**Mostrar carrito compras mobile***/

const carrito = document.querySelector(".carrito_container")
const carritoImg = document.getElementById("carrito_img")

carritoImg.addEventListener("click", function(){mostrarMenu(carrito,"block")})

/******Mostrar modal productos***/

const modal = document.getElementById("modal")
const iconClose = document.getElementById("icon_close")
const modalOpen = document.querySelectorAll(".card_boton")
const modalOpenArray = [...modalOpen]

modalOpenArray.forEach(card => {card.addEventListener("click" , function(){mostrarMenu(modal,"flex")})})

/******Ocultar modal productos***/

iconClose.addEventListener("click" , function(){mostrarMenu(modal,"none")})

/*Sumar y restar cantidad en el modal*/

const restar = document.querySelector(".btn_restar")
const sumar = document.querySelector(".btn_sumar")
const cantidad = document.getElementById("cantidad")

restar.addEventListener("click", function() {
  if (cantidad.value > 0 ) {
    cantidad.value = parseInt(cantidad.value) - 1;
  } 
});

sumar.addEventListener("click", function() {
  console.log("entró en sumar")
  cantidad.value = parseInt(cantidad.value) + 1;
});

/**Pintar modal de cada tipo de producto**/

// // Clase padre Pizza
// class Pizza {
//   constructor( imagen, titulo, descripcion, tamaño, sabor, toppings , cantidad, precio) {
//     this.imagen = imagen;
//     this.titulo = titulo;
//     this.descripcion = descripcion;
//     this.tamaño = tamaño;
//     this.sabor = sabor;
//     this.toppings = toppings;
//     this.observaciones = [];
//     this.cantidad = ;
//     this.precio = precio;
//   }

// Dependiendo del tamaño seleccionado, se pinta el precio//

//   calcularPrecio() {    
//     const precio = this.precio * (1 + impuesto);
//     return precioConImpuesto.toFixed(2);
//   }

// La observacion diligenciada se guarda en elemento//

//   agregarObservacion(observaciones) {    
//    this.observacion.push(observaciones);
//   }

// Se agrega la cantidad de cada producto//

//   agregarCantidad() {    
//     
//   }

//   agregarProductoCarrito() {    
//     
//   }


//   mostrarDetalles() {
//     console.log(Pizza ${this.tamaño} con ${this.ingredientes.join(', ')} - Precio: $${this.precio});
//   }

// // Clases hijas de Pizza //

// class Estofada extends Pizza {
//   constructor(tamaño) {
//     super(tamaño, ['Queso', 'Pepperoni'], 12.99);
//   }
// }
// class SuperEstofadas extends Pizza {
//   constructor(tamaño) {
//     super(tamaño, ['Queso', 'Tomate', 'Pimiento', 'Cebolla', 'Aceitunas'], 11.99);
//   }
// }
// class Especiales extends Pizza {
//   constructor(tamaño) {
//     super(tamaño, ['Queso', 'Pepperoni'], 12.99);
//   }
// }
// class Sencillas extends Pizza {
//   constructor(tamaño) {
//     super(tamaño, ['Queso', 'Pepperoni'], 12.99);
//   }
// }
// class Tipicas extends Pizza {
//   constructor(tamaño) {
//     super(tamaño, ['Queso', 'Pepperoni'], 12.99);
//   }
// }
// class Exclusivas extends Pizza {
//   constructor(tamaño) {
//     super(tamaño, ['Queso', 'Pepperoni'], 12.99);
//   }
// }
// class Premium extends Pizza {
//   constructor(tamaño) {
//     super(tamaño, ['Queso', 'Pepperoni'], 12.99);
//   }
// }


// // Clase Ensalada
// class Ensalada {
//   constructor(tipo, precio) {
//     this.tipo = tipo;
//     this.precio = precio;
//   }

//   mostrarDetalles() {
//     console.log(Ensalada ${this.tipo} - Precio: $${this.precio});
//   }

//   calcularPrecioTotal() {
//     const impuesto = 0.1;
//     const precioConImpuesto = this.precio * (1 + impuesto);
//     return precioConImpuesto.toFixed(2);
//   }
// }

// // Clase Bebida
// class Bebida {
//   constructor(tipo, tamaño, precio) {
//     this.tipo = tipo;
//     this.tamaño = tamaño;
//     this.precio = precio;
//   }

//   mostrarDetalles() {
//     console.log(Bebida ${this.tipo} (${this.tamaño}) - Precio: $${this.precio});
//   }

//   calcularPrecioTotal() {
//     const impuesto = 0.1;
//     const precioConImpuesto = this.precio * (1 + impuesto);
//     return precioConImpuesto.toFixed(2);
//   }
// }

// // Clase Pedido
// class Pedido {
//   constructor() {
//     this.items = [];
//   }

//   agregarItem(item) {
//     this.items.push(item);
//   }

//   mostrarResumen() {
//     console.log('Resumen del pedido:');
//     this.items.forEach(item => {
//       item.mostrarDetalles();
//     });

//     const total = this.calcularTotal();
//     console.log(Total del pedido: $${total});
//   }

//   calcularTotal() {
//     let total = 0;
//     this.items.forEach(item => {
//       total += parseFloat(item.calcularPrecioTotal());
//     });
//     return total.toFixed(2);
//   }
// }

// // Ejemplo de uso
// const pedido = new Pedido();

// const pizzaPepperoni = new PizzaPepperoni('Grande');
// const pizzaVegetariana = new PizzaVegetariana('Mediana');
// const ensalada = new Ensalada('César', 6.99);
// const bebida = new Bebida('Refresco', 'Grande', 1.99);

// pedido.agregarItem(pizzaPepperoni);
// pedido.agregarItem(pizzaVegetariana);
// pedido.agregarItem(ensalada);
// pedido.agregarItem(bebida);

// pedido.mostrarResumen();