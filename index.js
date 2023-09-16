/**Mostrar menu versión mobile***/
const navBar = document.getElementById("nav_bar_items")
const menuBurguer = document.getElementById("menu_hamburguesa")

menuBurguer.addEventListener("click", function(){mostrarMenu(navBar,"flex")})

function mostrarMenu(elemento,propiedadDisplay){  
  if(elemento.style.display == ""){
    elemento.style.display = propiedadDisplay    
  } else if(elemento.style.display == propiedadDisplay){    
    elemento.style.display = "none"   
  } else if (elemento.style.display == "none"){
    elemento.style.display = propiedadDisplay   
  }
}
/**Mostrar carrito compras mobile***/

const carrito = document.querySelector(".carrito")
const carritoImg = document.getElementById("carrito_img")

carritoImg.addEventListener("click", function(){mostrarMenu(carrito,"block")})

/******Mostrar modal productos***/

const modal = document.querySelector(".modal")
const cierreModal = document.getElementById("icon_close")

cierreModal.addEventListener("click", function(){mostrarMenu(modal,"flex")})

