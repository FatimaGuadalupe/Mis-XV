const divPrincipal = document.getElementById("container");
const btnAbrir = document.getElementById("btn-abrir");
const sobre = document.getElementById("sobre");
const sobreR= document.getElementById("sobreR");
const tapa = document.getElementById("tapa");
btnAbrir.addEventListener("click", desaparecer);

function desaparecer() {
 reproducirAudio();
sobreR.classList.add('animado');
setTimeout(() => {
sobre.style.display = "none";
divPrincipal.style.display = "block";
},2500)
tapa.classList.add('abrir');
}


const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');

//Fecha a futuro
const countdownDate = new Date('05 18, 2024 05:00:00').getTime();

let interval = setInterval(function(){
//Obtener fecha actual y milisegundos
const now = new Date().getTime();

//Obtener las distancias entre ambas fechas
let distance = countdownDate - now;

//Calculos a dias-horas-minutos-segundos
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

//Escribimos resultados
$days.innerHTML = days;
$hours.innerHTML = hours;
$minutes.innerHTML = minutes;
$seconds.innerHTML = ('0' + seconds).slice(-2);

//Cuando llegue a 0
if(distance < 0){
clearInterval(interval);
$finalMessage.style.transform = 'translateY(0)';
}
}, 1000);







function iniciarMap() {

  var coord = { lat: 21.911571573067143, lng: -102.30664244416418 };
  var coord2 = { lat: 21.909161225037312, lng: -102.30796125088494 };
  var idMap = 'map'; // ID del elemento del mapa en el HTML
  var idMap2 = 'map2';

  var map = new google.maps.Map(document.getElementById(idMap), {
      zoom: 17,
      center: coord
  });

  var marker = new google.maps.Marker({
      position: coord,
      map: map
  });

  var map2 = new google.maps.Map(document.getElementById(idMap2), {
      zoom: 17,
      center: coord2
  });

  var marker2 = new google.maps.Marker({
      position: coord2,
      map: map2
  });
}




//Para ver si lo estoy viendo
// Obtener todos los elementos con la clase contenedor5
var contenedoresx = new Map();
contenedoresx.set('.animar1', 'animacion1');
contenedoresx.set('.animar2', 'animacion2');
contenedoresx.set('.animar3', 'animacion3');
contenedoresx.set('.animar4', 'animacion4');
contenedoresx.set('.animar5', 'animacion5');
contenedoresx.set('.animar6', 'animacion6');



// Función para verificar si un elemento está visible en la ventana
function estaVisible(elemento) {
var rect = elemento.getBoundingClientRect();
var windowHeight = window.innerHeight || document.documentElement.clientHeight;
// Si la parte superior del elemento está dentro del área visible de la ventana
// o si la parte inferior del elemento está dentro del área visible de la ventana
// entonces consideramos que está visible.
return (
(rect.top >= 0 && rect.top <= windowHeight) ||
(rect.bottom >= 0 && rect.bottom <= windowHeight)
);
}

// Función para agregar o quitar la clase "deslis" a cada elemento según si está visible o no
function actualizarClase() {
contenedoresx.forEach(function(animacion, contenedores){
var contenedores= document.querySelectorAll(contenedores);

contenedores.forEach(function(contenedor) {
if (estaVisible(contenedor)) {
contenedor.classList.add(animacion);
} else {
contenedor.classList.remove(animacion);
}
});
});
}

// Llamar a la función cuando se cargue la página
actualizarClase();

// Llamar a la función cada vez que se haga scroll en la página
window.addEventListener('scroll', actualizarClase);



//EFECTO MAQUINA DE MAQUINA DE ESCRIBIR 
const texto ="En esta emotiva celebración de quince años, estamos reunidos para presenciar cómo Fátima Guadalupe florece. Que cada instante se convierta en un recuerdo de alegría en nuestros corazones. Brindemos por su futuro y los éxitos por venir. ¡Que esta noche sea inolvidable y rebosante de amor para nuestra bella quinceañera, Fátima Guadalupe!";
const velocidad = 50; // Velocidad de escritura en milisegundos


function escribirTexto(elemento, i) {
if (i < texto.length) {
elemento.innerHTML += texto.charAt(i);
i++;
setTimeout(function() { escribirTexto(elemento, i); }, velocidad);
}
}

document.querySelectorAll('.maquina-de-escribir').forEach(function(elemento) {
escribirTexto(elemento, 0);
});


// Función para obtener parámetros de la URL
function obtenerParametroUrl(nombreParametro) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(nombreParametro);
}

// Obtener el valor del parámetro "texto" de la URL
const textoParametro = obtenerParametroUrl('invitado');


// Obtener el elemento del párrafo
const parrafo = document.getElementById('textoParrafo');
const formulario= document.getElementById('formCantidad');
const cantidad= document.getElementById("cantidad-personas");
const informacion= document.getElementById("info-fam");
const btnConfirmar= document.getElementById("confirmarAsistencia");
const imprimirBoletos= document.getElementById("imprimir-boletos");
let  cantidadSeleccionada=1;
//MANEJO DE CHECK

btnConfirmar.addEventListener("click", function() {
    cantidadSeleccionada = document.getElementById("cantidadPersonas").value;
    cantidad.textContent="Boleto para "+cantidadSeleccionada+" personas";
    if (imprimirBoletos.style.display==="none") {
      imprimirBoletos.style.display="block";
      } 
      imprimirBoletos.style.display="block";
      irASeccionFinal();
      
      
});




// Establecer el texto del párrafo con el valor del parámetro
parrafo.textContent =  textoParametro;
informacion.textContent=textoParametro;



    // Obtener referencia al checkbox
    var checkbox = document.getElementById('myCheckbox');
    checkbox.checked = true;
    // Agregar un event listener para detectar cambios
    checkbox.addEventListener('change', function() {
      // Verificar si el checkbox está marcado
      if (checkbox.checked) {
        formulario.style.display="block";
       
      } else {
        formulario.style.display="none";
        imprimirBoletos.style.display="none";
      }
});



//CODIGO QR
let varQr=cantidadSeleccionada+"boletos"+textoParametro+"id:Sr&2146Psg";
new QRious({
    element: document.querySelector("#codigo"),
    value: `${varQr}`, // La URL o el texto
    size: 200,
    backgroundAlpha: 0, // 0 para fondo transparente
    foreground: "black", // Color del QR
    level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
});



// Función para convertir el contenido del div en una imagen
function convertirDivEnImagen() {
    const div = document.getElementById('boleto');

    // Cambiar escala antes de tomar la captura
    div.style.transform = 'scale(1)';

    html2canvas(div).then(canvas => {
        // Convertir el lienzo en una URL de datos
        const imageData = canvas.toDataURL('image/png');

        // Crear un elemento de enlace para la descarga
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = imageData;
        enlaceDescarga.download = 'imagen_desde_div.png';

        // Simular clic en el enlace de descarga
        enlaceDescarga.click();

        // Cambiar escala después de tomar la captura
        div.style.transform = 'scale(0.4)';
    });
}

// Manejador de evento para el botón de descarga
document.getElementById('botonDescargar').addEventListener('click', convertirDivEnImagen);




function irASeccionFinal() {
  // Obtener la posición de la sección final
  var seccionFinal = document.getElementById('imprimir-boletos');
  var posicion = seccionFinal.offsetTop;

  // Desplazarse hacia la posición de inicio de la sección final con animación suave
  window.scrollTo({
      top: posicion - 50, // Ajustar para posicionar al inicio de la sección
      behavior: 'smooth'
  });
}


function reproducirAudio() {
  var audio = document.getElementById("audio");
  audio.play();
}












document.getElementById('toggleButton').addEventListener('click', function() {
  let audio = document.getElementById('audio');
  if (audio.paused) {
      audio.play();
      this.innerText = 'Desactivar Audio';
  } else {
      audio.pause();
      this.innerText = 'Activar Audio';
  }
});


