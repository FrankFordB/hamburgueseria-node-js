const menuOcultoP = document.getElementById ('menu_p');
const menuIHPP = document.getElementById ('menuIHPP');
const botonAbrirModal = document.querySelector("#boton-abrir-modal");
const botonCerrarModal = document.querySelector("#boton-cerrar-modal");
const botonCerrarModal1 = document.querySelector("#boton-cerrar-modal1");
const modal= document.querySelector("#modal");
const menuIHPPCopia = document.getElementById('menuIHPPcopia');
const telForm = document.querySelector('.inicio_hamburguesa_inicio_fotos');


const paginaUno = document.getElementById ('hamburguesa_pagina1');
const paginaDos = document.getElementById ('hamburguesa_pagina2');
const paginaTres = document.getElementById ('hamburguesa_pagina3');
const paginaCuatro = document.getElementById ('hamburguesa_pagina4');

// VARIABLES DE INICIO PEDIDO HAMBURGUESAS 

const colorBtnInicio = document.getElementById('colorBtnInicio');
const colorBtnHaceTuPedido = document.getElementById ('colorBtnPedido');
const colorBtnHamburguesa = document.getElementById('colorBtnHamburguesas');
const colorBtnChedar = document.getElementById('chedarPileta');
const colorBtnPapas = document.getElementById("colorBtnPapas");

// VARIABLE REDES SLIDER

const redesOcultar = document.querySelector('.banner_conteiner_redes_ocultar');
const redesSlider = document.querySelector('.hidden-text');
// STYLOS INICIALES
menuOcultoP.style.display = '';
menuIHPP.style.display = 'none';
colorBtnInicio.style.textShadow = ' 1px -3px 8px rgb(15, 15, 15, .8)';
redesOcultar.style.display = 'none';

// STYLOS INICIALES PAGINAS
paginaUno.style.display= '';
paginaDos.style.display= 'none';
paginaTres.style.display= 'none';
paginaCuatro.style.display= 'none';


// SLIDER REDES SOCIALES
function btnSliderRedes() {
  if (redesOcultar.style.display == 'none'){
  redesOcultar.style.display = '';
  redesSlider.innerHTML = 'Redes ▲';
  text.classList.toggle('visible-text');
} else {
  redesOcultar.style.display = 'none';
  redesSlider.innerHTML = 'Redes ▼';
  text.classList.toggle('visible-text');
}}
const text = document.querySelector('.hidden-text');
    
// CAMBIO DE PAGINAS
function btnInicio() {
  paginaUno.style.display= '';
  paginaDos.style.display= 'none';
  paginaTres.style.display= 'none';
  paginaCuatro.style.display= 'none';
  
  colorBtnChedar.style.textShadow = '';
  colorBtnInicio.style.textShadow = ' 1px -3px 8px rgb(15, 15, 15, .8)';
  colorBtnHaceTuPedido.style.textShadow = '';
  colorBtnHamburguesa.style.textShadow = '';
  colorBtnPapas.style.textShadow = '';
  telForm.focus(telForm);
}

function btnHacetupedido() {
  paginaUno.style.display= 'none';
  paginaDos.style.display= 'none';
  paginaTres.style.display= 'none';
  paginaCuatro.style.display= 'none';

  colorBtnChedar.style.textShadow = '';
  colorBtnInicio.style.textShadow = '';
  colorBtnHaceTuPedido.style.textShadow = ' 1px -3px 8px rgb(15, 15, 15, .8)';
  colorBtnHamburguesa.style.textShadow = '';
  colorBtnPapas.style.textShadow = '';
}

function btnHamburguesas() {
  paginaUno.style.display= 'none';
  paginaDos.style.display= '';
  paginaTres.style.display= 'none';
  paginaCuatro.style.display= 'none';
  
  colorBtnChedar.style.textShadow = '';
  colorBtnInicio.style.textShadow = '';
  colorBtnHaceTuPedido.style.textShadow = '';
  colorBtnHamburguesa.style.textShadow = ' 1px -3px 8px rgb(15, 15, 15, .8)';
  colorBtnPapas.style.textShadow = '';
}


function btnPiletaChedar() {
  paginaUno.style.display= 'none';
  paginaDos.style.display= 'none';
  paginaTres.style.display= '';
  paginaCuatro.style.display= 'none';

  colorBtnChedar.style.textShadow = ' 1px -3px 8px rgb(15, 15, 15, .8)';
  colorBtnInicio.style.textShadow = '';
  colorBtnHaceTuPedido.style.textShadow = '';
  colorBtnHamburguesa.style.textShadow = '';
  colorBtnPapas.style.textShadow = '';

}

function btnPapas() {
  paginaUno.style.display= 'none';
  paginaDos.style.display= 'none';
  paginaTres.style.display= 'none';
  paginaCuatro.style.display= '';

  colorBtnChedar.style.textShadow = '';
  colorBtnInicio.style.textShadow = '';
  colorBtnHaceTuPedido.style.textShadow = '';
  colorBtnHamburguesa.style.textShadow = '';
  colorBtnPapas.style.textShadow = ' 1px -3px 8px rgb(15, 15, 15, .8)';
}

// ABRIR MENU (EN MEDIA QUERY) 

function btnMenu () {
  if (menuOcultoP.style.display === 'none'){
    menuOcultoP.style.display = '';
    menuIHPP.style.display = 'none';
  }  else {
    menuOcultoP.style.display = 'none';
    menuIHPP.style.display = ''
  }
  
}




// ABRIR Y CERRAR MODALES 

botonAbrirModal.addEventListener("click",()=>{
    modal.showModal();
});

window.onclick = function (Event) {
  if (Event.target === modal) {
    modal.close();
  } else{

  }
  }

botonCerrarModal.addEventListener("click",()=>{
    modal.close();
});
botonCerrarModal1.addEventListener("click",()=>{
  modal.close();
});




