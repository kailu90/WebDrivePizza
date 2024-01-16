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

  /*Creo contenedor ModalContent con sus elementos hijos*/
  
  const modalContent = document.createElement('div')
  modalContent.classList.add('modal-content')

  const modalDescription = document.createElement('div')
  modalDescription.classList.add('modal-description')
  
  /*Creo contenedor ImageContainer con sus elementos hijos*/

  const modalImageContainer = document.createElement('div')
  modalImageContainer.classList.add('modal__image-container')
  
  const i = document.createElement('i')
  i.classList.add('fa-solid' , 'fa-circle-xmark')
  i.setAttribute('id', 'icon_close')
  
  const modalImage = document.createElement('img')
  modalImage.classList.add('modal__image')

  modalImageContainer.append(i, modalImage)

  /*Creo contenedor TitleContainer con sus elementos hijos*/

  const modalTitleContainer = document.createElement('div')
  modalTitleContainer.classList.add('modal__title-container')

  const h2Title = document.createElement('h2')
  h2Title.classList.add('modal__title') 
  h2Title.innerText = 'PRUEBA';

  const pDescription = document.createElement('p')
  pDescription.classList.add('modal__description')

  modalTitleContainer.append(h2Title, pDescription)

  /*Agrego los elementos padres, con sus elementos hijos*/
  
  modalDescription.append(modalImageContainer, modalTitleContainer)


/*Creo contenedor padres de tamaños, con sus elementos hijos*/
  
  const modalForm = document.createElement('form')
  modalForm.classList.add('modal__form')

  const modalFormContainer = document.createElement('div')
  modalFormContainer.classList.add('modal__form-container')

  const modalSize = document.createElement('div')
  modalSize.classList.add('modal__size')

  const modalSizeList = document.createElement('div')
  modalSizeList.classList.add('modal__size-list')

  const modalSizeTitle = document.createElement('label')
  modalSizeTitle.classList.add('modal__size-title')

  const modalSizeSelect = document.createElement('select')
  modalSizeSelect.classList.add('modal__size-select')

  const optionSeleccionar = document.createElement('option')
  const optionPorcion = document.createElement('option')
  const optionPequeña = document.createElement('option')
  const optionMediana = document.createElement('option')
  const optionGrande = document.createElement('option')
  const optionJumbo = document.createElement('option')

  modalSizeSelect.append(optionSeleccionar, optionPorcion, optionPequeña, optionMediana, optionGrande, optionJumbo)
  modalSizeList.append(modalSizeTitle ,  modalSizeSelect)
  modalSize.append(modalSizeList)
  modalFormContainer.append(modalSize)


  /*Se crea contenedor padre de sabores y sus hijos*/

  const modalFlavors = document.createElement('div')
  modalFlavors.classList.add('modal__flavors')

  const modalFlavorsList = document.createElement('div')
  modalFlavorsList.classList.add('modal__flavors-list')
  
  const modalFlavorsTitle = document.createElement('label')
  modalFlavorsTitle.classList.add('modal__flavors-title')

  const modalFlavorsSelect = document.createElement('select')
  modalFlavorsSelect.classList.add('modal__flavors-select')

  const optionSabor = document.createElement('option')

  modalFlavorsSelect.appendChild(optionSabor)
  modalFlavorsList.append(modalFlavorsTitle, modalFlavorsSelect)
  modalFlavors.append(modalFlavorsList) 
  modalFormContainer.append(modalFlavors) 

  
 /*Se crea contenedor padre de Toppings y sus hijos*/

 const modalToppings = document.createElement('div')
 modalToppings.classList.add('modal__toppings')
 
 const modalToppingsTitle = document.createElement('h3')
 modalToppingsTitle.classList.add('modal__toppings-title')

 const modalToppingsList = document.createElement('div')
 modalToppingsList.classList.add('modal__toppings-list')

 /*Creación de todos los hijos de Toppings List (los Labels e inputs de los Toppings)*/

 const labelTomate = document.createElement('label')
 labelTomate.classList.add('modal__toppings-label')
 labelTomate.setAttribute('id', 'labelTomate') 
 const inputTomate = document.createElement('input')
 labelTomate.appendChild(inputTomate)

 const labelCebolla = document.createElement('label')
 labelCebolla.classList.add('modal__toppings-label')
 labelCebolla.setAttribute('id', 'labelCebolla')
 const inputCebolla = document.createElement('input')
 labelCebolla.appendChild(inputCebolla)

 const labelPimenton = document.createElement('label')
 labelPimenton.classList.add('modal__toppings-label')
 labelPimenton.setAttribute('id', 'labelPimenton') 
 const inputPimenton = document.createElement('input')
 labelPimenton.appendChild(inputPimenton)

 const labelPina = document.createElement('label')
 labelPina.classList.add('modal__toppings-label')
 labelPina.setAttribute('id', 'labelPina') 
 const inputPina = document.createElement('input')
 labelPina.appendChild(inputPina)

 const labelMaduro = document.createElement('label')
 labelMaduro.classList.add('modal__toppings-label')
 labelMaduro.setAttribute('id', 'labelMaduro') 
 const inputMaduro = document.createElement('input')
 labelMaduro.appendChild(inputMaduro)

 const labelJamon = document.createElement('label')
 labelJamon.classList.add('modal__toppings-label')
 labelJamon.setAttribute('id', 'labelJamon') 
 const inputJamon = document.createElement('input')
 labelJamon.appendChild(inputJamon)
 
 const labelRanchera = document.createElement('label')
 labelRanchera.classList.add('modal__toppings-label')
 labelRanchera.setAttribute('id', 'labelRanchera') 
 const inputRanchera = document.createElement('input')
 labelRanchera.appendChild(inputRanchera)

 const labelMaiz = document.createElement('label')
 labelMaiz.classList.add('modal__toppings-label')
 labelMaiz.setAttribute('id', 'labelMaiz') 
 const inputMaiz = document.createElement('input')
 labelMaiz.appendChild(inputMaiz)

 const labelChampinon = document.createElement('label')
 labelChampinon.classList.add('modal__toppings-label')
 labelChampinon.setAttribute('id', 'labelChampinon') 
 const inputChampinon = document.createElement('input')
 labelChampinon.appendChild(inputChampinon)

 const labelSalami = document.createElement('label')
 labelSalami.classList.add('modal__toppings-label')
 labelChampinon.setAttribute('id', 'labelChampinon') 
 const inputSalami = document.createElement('input')
 labelSalami.appendChild(inputSalami)

 const labelTocineta = document.createElement('label')
 labelTocineta.classList.add('modal__toppings-label')
 labelTocineta.setAttribute('id', 'labelTocineta') 
 const inputTocineta = document.createElement('input')
 labelTocineta.appendChild(inputTocineta)

 const labelQueso = document.createElement('label')
 labelQueso.classList.add('modal__toppings-label')
 labelQueso.setAttribute('id', 'labelQueso') 
 const inputQueso = document.createElement('input')
 labelQueso.appendChild(inputQueso)

 const labelPepperoni = document.createElement('label')
 labelPepperoni.classList.add('modal__toppings-label')
 labelPepperoni.setAttribute('id', 'labelPepperoni') 
 const inputPepperoni = document.createElement('input')
 labelPepperoni.appendChild(inputPepperoni)
 
 const labelCarne = document.createElement('label')
 labelCarne.classList.add('modal__toppings-label')
 labelCarne.setAttribute('id', 'labelCarne') 
 const inputCarne = document.createElement('input')
 labelCarne.appendChild(inputCarne)

 const labelPollo = document.createElement('label')
 labelPollo.classList.add('modal__toppings-label')
 labelPollo.setAttribute('id', 'labelPollo') 
 const inputPollo = document.createElement('input')
 labelPollo.appendChild(inputPollo)
 
 const labelChorizo = document.createElement('label')
 labelChorizo.classList.add('modal__toppings-label')
 labelChorizo.setAttribute('id', 'labelChorizo') 
 const inputChorizo = document.createElement('input')
 labelChorizo.appendChild(inputChorizo)

 const labelCamaron = document.createElement('label')
 labelCamaron.classList.add('modal__toppings-label')
 labelCamaron.setAttribute('id', 'labelCamaron') 
 const inputCamaron = document.createElement('input')
 labelCamaron.appendChild(inputCamaron)

 modalToppingsList.append(labelTomate , labelCebolla ,  labelPimenton ,
 labelPina , labelMaduro , labelJamon , labelRanchera , labelMaiz , 
 labelChampinon , labelSalami , labelTocineta , labelQueso , labelPepperoni ,
 labelCarne , labelPollo , labelChorizo , labelCamaron)

 modalToppings.append(modalToppingsTitle , modalToppingsList)
 modalFormContainer.append(modalToppings)

 /*Creación de los elementos Observación y sus hijos*/

 const modalObservation = document.createElement('div')
 modalObservation.classList.add('modal__observation')

 const modalObservationContainer = document.createElement('div')
 modalObservationContainer.classList.add('modal__observation-container')

 const modalObservationLabel = document.createElement('label')
 modalObservationLabel.classList.add('modal__observation-label')

 const modalObservationField = document.createElement('textarea')
 modalObservationField.classList.add('modal__observation-field')

 modalObservationContainer.append(modalObservationLabel , modalObservationField)
 modalObservation.append(modalObservationContainer) 
 modalFormContainer.append(modalObservation)

 /*Creación de los elementos cantidad y sus hijos*/
 
 const modalQuantity = document.createElement('div')
 modalQuantity.classList.add('modal__quantity') 

 const modalBtnMinus = document.createElement('button')
 modalBtnMinus.classList.add('modal__btn-minus')

 const modalQuantityInput = document.createElement('input')
 modalQuantityInput.classList.add('modal__quantity-input')

 const modalBtnPlus = document.createElement('button')
 modalBtnPlus.classList.add('modal__btn-plus')

 modalQuantity.append(modalBtnMinus , modalQuantityInput , modalBtnPlus)
 modalFormContainer.append(modalQuantity) 

  /*Creación de los elementos footer y sus hijos*/

  const modalFooter = document.createElement('div')
  modalFooter.classList.add('modal__footer')

  const modalTotal = document.createElement('div')
  modalTotal.classList.add('modal__total')

  const pTotalPrice = document.createElement('p')
  pTotalPrice.classList.add('p__total-price')

  const modalCheckoutBtn = document.createElement('button')
  modalCheckoutBtn.classList.add('modal__checkout-btn')

  const iconCart = document.createElement('i')
  iconCart.classList.add('fa-solid' , 'fa-cart-shopping')


  /*Se agregan elementos padres a sus respectivos padres*/

  modalCheckoutBtn.appendChild(iconCart)
  modalTotal.appendChild(pTotalPrice)
  modalFooter.append(modalTotal , modalCheckoutBtn)
  modalFormContainer.append(modalFooter)

  modalForm.append(modalFormContainer)
  modalContent.append(modalDescription , modalForm)
  modal.appendChild(modalContent)
 
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