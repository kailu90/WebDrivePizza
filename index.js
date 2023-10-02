/**Mostrar menu versión mobile***/
const navBar = document.getElementById("nav_bar")
const menuBurguer = document.querySelector(".menu_hamburguesa")

menuBurguer.addEventListener("click", function(){mostrarMenu(navBar,"flex")})

function mostrarMenu(elemento , propiedadDisplay){  
  if(elemento.style.display == ""){
    elemento.style.display = propiedadDisplay   
    console.log("esta entrando primer if")
  } else if (elemento.style.display == propiedadDisplay){    
    elemento.style.display = "none"   
    console.log("esta entrando segundo if") 
  } else if (elemento.style.display == "none"){
    elemento.style.display = propiedadDisplay   
    console.log("esta entrando tercer if") 
  } else if (elemento.style.display == "flex"){
    elemento.style.display = propiedadDisplay 
    console.log("esta entrando cuarto if") 
  }
}
/**Mostrar carrito compras mobile***/

const carrito = document.querySelector(".carrito_container")
const carritoImg = document.getElementById("carrito_img")

carritoImg.addEventListener("click", function(){mostrarMenu(carrito,"block")})

/******Mostrar modal productos***/

const modal = document.getElementById("modal")
const iconClose = document.getElementById("icon_close")
const modalOpen = document.querySelector(".card")

modalOpen.addEventListener("click" , function(){mostrarMenu(modal,"flex")})

/******Ocultar modal productos***/

iconClose.addEventListener("click" , function(){mostrarMenu(modal,"none")})

const atras = document.querySelector(".flecha_atras_container")


atras.addEventListener("click" , )