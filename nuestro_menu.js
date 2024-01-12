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
  const { title,
    description,
    sabor1,
    sabor2,
    sabor3,
    sabor4,
    totalPrice} = objeto

    modal.innerHTML = `<section class="modal_descripcion">
    <div class="modal_superior">
      <div class="modal_superior_img">
        <i class="fa-solid fa-circle-xmark" id="icon_close"></i>
        <img src="./imagenes/pizzas/pizza_estofada_Mobile.jpg" alt="imagen de producto">
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
              <option selected>Seleccionar</option>
              <option value="">${sabor1}</option>
              <option value="">${sabor2}</option>
              <option value="">${sabor3}</option>
              <option value="">${sabor4}</option>
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

modalOpenArray.forEach(card => {card.addEventListener("click" , function(){
  mostrarMenu(modal,"flex")

  let title
  let description
  let sabor1
  let sabor2
  let sabor3
  let sabor4
  let totalPrice

  if (card.id === "btn-estofadas") {
    mostrarModal({
      title = ,
      description = ,
      sabor1 = ,
      sabor2 = ,
      sabor3 = ,
      sabor4 =,
      totalPrice
    })
  } else if(card.id === "btn-superEstofadas") {
    
  } else if (card.id === "btn-especiales") {

  } else if (card.id === "btn-sencillas") {

  } else if (card.id === "btn-tipicas") {

  } else if (card.id === "btn-exclusivas") {

  } else if (card.id === "btn-premium") {

  }

  if (card.id === "btn-estofadas") {
    title = "Estofadas"
    description = "loremasdfsfsafsdf"
    sabor1 = "Estofada Hawaina"
    sabor2 = "Suprema estofada"
    sabor3 = "Estofada triple queso"
    sabor4 = "Estofada  de carnes"
    modal.innerHTML = `<section class="modal_descripcion">
    <div class="modal_superior">
      <div class="modal_superior_img">
        <i class="fa-solid fa-circle-xmark" id="icon_close"></i>
        <img src="./imagenes/pizzas/pizza_estofada_Mobile.jpg" alt="imagen de producto">
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
              <option selected>Seleccionar</option>
              <option value="">${sabor1}</option>
              <option value="">${sabor2}</option>
              <option value="">${sabor3}</option>
              <option value="">${sabor4}</option>
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
  } else if(card.id === "btn-superEstofadas") {
  title = "Super Estofadas"
    description = "loremasdfsfsafsdf"
    sabor1 = "aflsajefe"
    sabor2 = "aklsfjsf"
    sabor3 = "alsfj"
    sabor4 = "orirowr"

    modal.innerHTML = `<section class="modal_descripcion">
    <div class="modal_superior">
      <div class="modal_superior_img">
        <i class="fa-solid fa-circle-xmark" id="icon_close"></i>
        <img src="./imagenes/pizzas/pizza_estofada_Mobile.jpg" alt="imagen de producto">
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
              <option selected>Seleccionar</option>
              <option value="">${sabor1}</option>
              <option value="">${sabor2}</option>
              <option value="">${sabor3}</option>
              <option value="">${sabor4}</option>
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

})})

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

// class Pizza {
//   constructor(nombre, description, tamaño, sabor, toppins) {
//     this.nombre = nombre 
//     this.description = description 
//     this.tamaño = tamaño
//     this.sabor = sabor
//     this.toppins = toppins
//     this.observation = []
//   }

//   calcTotalPrice() {}


//   addToCart() {

//   }

//   addObservation() {

//   }
  
// }

// const primeraPizza = new Pizza('')