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

/*Adicionar o eliminar elementos del carrito de compras*/

var productoCarrito = document.createElement(".carrito_item")
const carritoContainer = document.getElementById("carritoContainer")
carrito_item.textContent = "";

carritoContainer.appendChild(productoCarrito);

/*Sumar y restar cantidad en el modal*/

let restar = document.getElementById("restaModal")
let sumar = document.getElementById("sumaModal")
let cantidad = document.getElementById("cantidad")
let sumaProductosModal = 0;

function actualizarCantidadProductos() {
  cantidad.value = sumaProductosModal;
  console.log("entrando a actualizar")
}

restar.addEventListener("click", function() {
  console.log("entrando a restar")
  sumaProductosModal= sumaProductosModal-1;
  cantidad.value.innerHTML=cantidad;
  actualizarCantidadProductos();
});

sumar.addEventListener("click", function() {
  console.log("entrando a sumar")
  sumaProductosModal= sumaProductosModal+1;
  cantidad.value.innerHTML=cantidad;
  actualizarCantidadProductos();
});

