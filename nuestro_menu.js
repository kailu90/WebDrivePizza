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
const modalOpen = document.querySelectorAll(".card_boton")
const modalOpenArray = [...modalOpen]

//variables que contienen las imágenes de las clases de pizzas para el modal

let imageEstofadas = `./imagenes/pizzas/pizza`
let imageSuperEstofadas
let imageSencillas
let imageEspeciales
let imageTipicas
let imageExclusivas
let imagePremium


//iterar el contenedor Modal para mostrar los datos de la opción elegida:
// la imagen del modal tiene que tomar en cuenta el tipo de pizza y la dimensión de pantalla 
// Título dependiendo del tipo de pizza, la descripción igual
// las opciones deben tener ID's que se puedan identificar luego

function  mostrarModal(objeto) {  

  const { 
    image ,
    title,

    description,
    sabor,
    totalPrice} = objeto
  
  const modalContent = document.createElement('div')
  modalContent.classList.add('modal__content')

  const divDescription = document.createElement('div')
  divDescription.classList.add('modal__description')

  const divImageContainer = document.createElement('div')
  divImageContainer.classList.add('modal__image-container')
  
  const i = document.createElement('i')
  i.classList.add('fa-solid fa-circle-xmark')
  
  const img = document.createElement('img')
  img.classList.add('modal__image')

  divImageContainer.append(i, img)

  const divTitleContainer = document.createElement('div')
  divTitleContainer.classList.add('modal__title-container')

  const h2Title = document.createElement('h2')
  h2Title.classList.add('modal__title')  
  const pDescription = document.createElement('p')
  pDescription.classList.add('modal__description')
  
  const form = document.createElement('form')
  
  const divModalInferior = document.createElement('div')
  const divModalInferiorContainer = document.createElement('div')
  const divModalTamañoModalLista = document.createElement('div')
  const modaltamañoLista = document.createElement('form')
  const modaltamañoLabel = document.createElement('label')
  const selectTamaño = document.createElement('select')
  const optionSeleccionar = document.createElement('option')
  const optionPorcion = document.createElement('option')
  const optionPequeña = document.createElement('option')
  const optionMediana = document.createElement('option')
  const optionGrande = document.createElement('option')
  const optionJumbo = document.createElement('option')

  const divModalSabores = document.createElement('div')
  const modalSaboresLista = document.createElement('form')
  const labelSabores = document.createElement('label')
  const selectSabores = document.createElement('select')
  const optionSabor = document.createElement('option')

  const divModalToppings = document.createElement('div')
  const h3Toppings = document.createElement('h3')
  const modalToppingsLista = document.createElement('form')
  const labelTomate = document.createElement('label')
  const inputTomate = document.createElement('input')
  const labelCebolla = document.createElement('label')
  const inputCebolla = document.createElement('input')
  const labelPimenton = document.createElement('label')
  const inputPimenton = document.createElement('input')
  const labelPina = document.createElement('label')
  const inputPina = document.createElement('input')
  const labelMaduro = document.createElement('label')
  const inputMaduro = document.createElement('input')
  const labelJamon = document.createElement('label')
  const inputJamon = document.createElement('input')
  const labelRanchera = document.createElement('label')
  const inputRanchera = document.createElement('input')
  const labelMaiz = document.createElement('label')
  const inputMaiz = document.createElement('input')
  const labelChampinon = document.createElement('label')
  const inputChampinon = document.createElement('input')
  const labelSalami = document.createElement('label')
  const inputSalami = document.createElement('input')
  const labelTocineta = document.createElement('label')
  const inputTocineta = document.createElement('input')
  const labelQueso = document.createElement('label')
  const inputQueso = document.createElement('input')
  const labelPepperoni = document.createElement('label')
  const inputPepperoni = document.createElement('input')
  const labelCarne = document.createElement('label')
  const inputCarne = document.createElement('input')
  const labelPollo = document.createElement('label')
  const inputPollo = document.createElement('input')
  const labelChorizo = document.createElement('label')
  const inputChorizo = document.createElement('input')
  const labelCamaron = document.createElement('label')
  const inputCamaron = document.createElement('input')

  const observacionContainer = document.createElement('div')
  const observacionForm = document.createElement('form')
  const labelObservacion = document.createElement('label')
  const textArea = document.createElement('textarea')

  const cantidadContainer = document.createElement('div')
  const btnRestar = document.createElement('button')
  const cantidad = document.createElement('input')
  const btnSumar = document.createElement('button')

  const footerModal = document.createElement('div')
  const divPTotal = document.createElement('div')
  const pTotal = document.createElement('p')

  const btnModalSubmit = document.createElement('button')
  const iIconCart = document.createElement('i')



  modal.appendChild(modalContent)

    modal.innerHTML = `<section class="modal_descripcion">
    <div class="modal_superior">

      <div class="modal_superior_img">
        <i class="fa-solid fa-circle-xmark" id="icon_close"></i>
        <img src=${image} alt="imagen de producto">
      </div>

      <div class="modal_superior_title">
        <h2 class="modal_descripcion_title">${title}</h2>
        <p class="modal_descripcion_parrafo">${description}</p>
      </div>

    </div>

    <div class="modal_inferior">
    
    <div class="modal_inferior_container">
    
    <div class="modal_tamaño modal_lista">
    
      <form class="modal_tamaño_lista">
            <label for="tamaño" class="modal_tamaño_title">Escoge el tamaño</label>
            <select name="tamaño" id="tamaño">
              <option selected>Seleccionar</option>
              <option value="">Porción</option>
              <option value="">Pequeña</option>
              <option value="">Mediana</option>
              <option value="">Grande</option>
              <option value="">Jumbo</option>
            </select>
      </form>
    
    </div>
        <div class="modal_sabores modal_lista">
          <form class="modal_sabores_lista">
            <label for="sabores" class="modal_sabores_title">Escoge el sabor</label>
            <select name="sabores" id="sabores">
            ${sabor.map(string => `<option selected>${string}</option>`)}      
            </select>
          </form>
        </div>
        <div class="modal_toppings modal_lista">
          <h3 class="titulo_toppings">Escoge tus toppins adicionales</h3>
          <form class="modal_toppings_lista">
            <label class="modal_toppings_title">Tomate
              <input id="tomate" type="radio" name="tomate">
            </label>
            <label class="modal_toppings_title">Cebolla
              <input type="radio" name="cebolla">
            </label>
            <label class="modal_toppings_title">Pimenton
              <input type="radio" name="pimenton">
            </label>
            <label class="modal_toppings_title">Piña
              <input type="radio" name="piña">
            </label>
            <label class="modal_toppings_title">Maduro
              <input type="radio" name="maduro">
            </label>
            <label class="modal_toppings_title">Jamón
              <input type="radio" name="jamón">
            </label>
            <label class="modal_toppings_title">Ranchera
              <input type="radio" name="ranchera">
            </label>
            <label class="modal_toppings_title">Maiz
              <input type="radio" name="maiz">
            </label>
            <label class="modal_toppings_title">Champiñon
              <input type="radio" name="maiz">
            </label>
            <label class="modal_toppings_title">Salami
              <input type="radio" name="maiz">
            </label>
            <label class="modal_toppings_title">Tocineta
              <input type="radio" name="maiz">
            </label>
            <label class="modal_toppings_title">Queso
              <input type="radio" name="maiz">
            </label>
            <label class="modal_toppings_title">Pepperoni
              <input type="radio" name="maiz">
            </label>
            <label class="modal_toppings_title">Carne
              <input type="radio" name="maiz">
            </label>
            <label class="modal_toppings_title">Pollo
              <input type="radio" name="maiz">
            </label>
            <label class="modal_toppings_title">Chorizo
              <input type="radio" name="maiz">
            </label>
            <label class="modal_toppings_title">Camarón
              <input type="radio" name="maiz">
            </label>
          </form>
        </div>
      </div>
    </div>
    <div class="modal_observacion">
      <form action="" class="observacion">
        <label for="observacion">Observaciones:</label>
        <textarea class="campo_observacion" name="observacion" id="observacion" cols="30" rows="6"
          placeholder="[Escribe tu observación aquí]"></textarea>
      </form>
    </div>
    <div class="modal_cantidad">
      <button class="btn_restar">-</button>
      <input type="text" id="cantidad" value="0">
      <button class="btn_sumar">+</button>
    </div>
    <div class="footer_modal">
      <div class="btn_modal_total">
        <p>${totalPrice}</p>
      </div>
      <button id="btn-modal-submit" class="btn_modal_checkout">
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  </section>` 
}

let iconClose

modalOpenArray.forEach(card => {card.addEventListener("click" , function(){
  mostrarMenu(modal,"flex")

  if (card.id === "btn-estofadas") {
    mostrarModal({
      image : "./imagenes/pizzas/pizza_estofada_Mobile.jpg",
      title : "ESTOFADAS",
      description : "Pizza con dos capas de masa, en el medio con ingredientes",
      sabor : ["ESTOFADA CARNE" , "ESTOFADA HAWAIANA" , "SUPREMA ESTOFADA" , "ESTOFADA TRIPLE QUESO" ],
      totalPrice : "$14.000" ,
    })    

  } else if(card.id === "btn-super-estofadas") {
    mostrarModal({
      image : "./imagenes/pizzas/pizza_super_carnes1_Mobile.jpg",
      title : "SUPER ESTOFADAS",
      description : "Pizza con dos capas de masa, en el medio con ingredientes, con doble porción de queso mozarella y queso de la casa.",
      sabor : ["SUPER ESTOFADAS CARNES" , "SUPER ESTOFADA HAWAIANA"],
      totalPrice : "$14.000" ,
    })
    
  } else if (card.id === "btn-especiales") {
    mostrarModal({
      image : "./imagenes/pizzas/pizza_drive_topetunas_bolognesa_criolla1.jpg ",
      title : "ESPECIALES",
      description : "Pizzas con una masa tradicional con ingredientes especiales en la medida correcta.",
      sabor : ["PEPPERONI" , "MEXICANA" , "TERIYAKI" , "CAMARÓN A LA CRIOLLA" , "PAISA" , "CRIOLLA" , "CARNIVORA" , "PIZZA DRIVE"],
      totalPrice : "$14.000" ,
    })

  } else if (card.id === "btn-sencillas") {
    mostrarModal({
      image : "./imagenes/pizzas/pizza_p_champ2_Mobile.jpg",
      title : "SENCILLAS",
      description : "Pizzas con una masa tradicional con sabores más clásicos que aún perduran en el tiempo.",
      sabor : ["MARGARITA TRADICIONAL" , "POLLO", "TRES CARNES" , "CHAMPIÑONES" , "DOBLE QUESO" , "NAPOLITANA" , "JAMÓN", "BOCADILLO"],
      totalPrice : "$14.000" ,
    })

  } else if (card.id === "btn-tipicas") {
    mostrarModal({
      image : "./imagenes/pizzas/pizza_suprema_pollo_Mobile.jpg",
      title : "TÍPICAS",
      description : "Pizza con una masa tradicional, con sabores más auténticos.",
      sabor : ["TOC" , "SUPREMA", "CIRUELA Y TOCINETA" , "POLLO Y BBQ" , "POLLO Y MIEL MOSTAZA" , "VEGETARIANA" , "SUPREMA DE POLLO", 
      "MADURO Y TOCINETA" , "POLLO Y CHAMPIÑONES" , "ESPECIAL DE CARNES" , "BOCADILLO Y TOCINETA"],
      totalPrice : "$14.000" ,
    })

  } else if (card.id === "btn-exclusivas") {
    mostrarModal({
      image : "./imagenes/pizzas/pizza_topetunas1_Mobile.jpg",
      title : "EXCLUSIVAS",
      description : "Pizzas con una masa tradicional con sabores exclusivos.",
      sabor : ["HAWAIANA CHIC" , "ESCANDINAVA", "BOLOGNESA" , "TOPETUNAS" , "CARBONARA"],
      totalPrice : "$14.000" ,
    })

  } else if (card.id === "btn-premium") {
    mostrarModal({
      image : "./imagenes/pizzas/pizza_genova_Mobile.JPG",
      title : "PREMIUM",
      description : "Pizza con una masa tradicional, con sabores gourmet.",
      sabor : ["CALIFORNIA PDT" , "CARBONARA PDT" , "CUATRO QUESOS" , "DEL HUERTO PDT" , "FLORENCIA PT" , "GENOVA PT" ,
      "IBÉRICA PDT" , "LIVORNO PT" , "MILAN PDT" , "MARGARITA PDT" , "MELAKY PDT" , "VENECIA PDT"],
      totalPrice : "$14.000" ,
    })
  }

/******Ocultar modal productos***/

  iconClose = document.getElementById("icon_close")

  iconClose.addEventListener("click" , function(){mostrarMenu(modal,"none")})
  
  const restar = document.querySelector(".btn_restar")
  const sumar = document.querySelector(".btn_sumar")
  const cantidad = document.getElementById("cantidad")

  restar.addEventListener("click", function () {
    sumarRestar(cantidad, "restar");
  });
  
  sumar.addEventListener("click", function () {
    sumarRestar(cantidad, "sumar");
  });
  

})})

/*Sumar y restar cantidad en el modal*/

function sumarRestar(cantidad , operacion){
if (operacion === "restar"){  
  console.log(operacion , cantidad)
  if (cantidad.value > 0) {
    cantidad.value = parseInt(cantidad.value) - 1;
  }   
}
if (operacion === "sumar") {
  console.log(operacion , cantidad)
  cantidad.value = parseInt(cantidad.value) + 1;
}
}