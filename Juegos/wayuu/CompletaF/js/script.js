const gameContainer = document.getElementById("game");

let cantPreg = 0;
let pregCorr = 0;
const frases = [
  {
    fraseCompleta: "Kasa>a painjaka?",
    fraseConBlanco: "Kasa>a _______?",   
    palabraFaltante: "painjaka",
    fraseEspanol: "¿Que estás haciendo?",
  },
  {
    fraseCompleta: "¿Kasaichi sunulia puikat ",
    fraseConBlanco: "¿Kasaichi sunulia _______ ?",
    palabraFaltante: "puikat ",
    fraseEspanol: "¿cómo se llama tu mamá?",
  },
  {
    fraseCompleta: "¿Jaama puikat kasa>a sainjaka?",
    fraseConBlanco: "¿Jaama puikat kasa>a _______?",
    palabraFaltante: "sainjaka",
    fraseEspanol: "¿Y tu mama a que se dedica?",
  },
  {
    fraseCompleta: "Tüü wayetakat takorolo",
    fraseConBlanco: "Tüü wayetakat _______?",
    palabraFaltante: "takorolo",
    fraseEspanol: "Esta olla es mia",
  },
  {
    fraseCompleta: "Anachonsu>u türa jintutkat",
    fraseConBlanco: "Tüü wayetakat _______?",
    palabraFaltante: "jintutkat",
    fraseEspanol: "Esa niña es bonita",
  }, 
  {
    fraseCompleta: "Minchikat tüsa su>ukorolo tawala",
    fraseConBlanco: "Minchikat tüsa su>ukorolo _______?",
    palabraFaltante: "tawala",
    fraseEspanol: "aquella casa es de mi hermana",
  },
  {
    fraseCompleta: "oünüshi waya saü Püliiku",
    fraseConBlanco: "oünüshi _______ saü Püliiku?",
    palabraFaltante: "waya",
    fraseEspanol: "nosotros nos fuimos en burro",
  },
  {
    fraseCompleta: "Jalaas pia kepian?",
    fraseConBlanco: "Jalaas pia _______?",
    palabraFaltante: "kepian",
    fraseEspanol: "Donde vives?",
  },
  {
    fraseCompleta: "Jamayaa, watta´a maalü",
    fraseConBlanco: "Jamayaa, watta´a _______?",
    palabraFaltante: "maalü",
    fraseEspanol: "Hola, buenos días?",
  },
  {
    fraseCompleta: "Kasuusu tura mawüika",
    fraseConBlanco: "Kasuusu tura _______?",
    palabraFaltante: "mawüika",
    fraseEspanol: "El algodón es blanco",
  },
  {
    fraseCompleta: "Ishosü so>ou tepia",
    fraseConBlanco: "_______ so>ou tepia",
    palabraFaltante: "Ishosü",
    fraseEspanol: "La puerta de mi casa es roja",
  },
  {
    fraseCompleta: "Wuittusu mmapakat",
    fraseConBlanco: "_______ mmapakat",
    palabraFaltante: "Wuittusu",
    fraseEspanol: "Los pastos son verde",
  },
  {
    fraseCompleta: "Yuuisü sushein toushi",
    fraseConBlanco: "Yuuisü _______ toushi",
    palabraFaltante: "sushein",
    fraseEspanol: "Mi abuela tiene la manta negra",
  },
  {
    fraseCompleta: "Chií tamünuinkai jo>oüchon",
    fraseConBlanco: "Chií tamünuinkai _______",
    palabraFaltante: "jo>oüchon",
    fraseEspanol: "Mi perro es pequeño",
  },
  {
    fraseCompleta: "Chií tashikai wanne wayuu anakajüinchi",
    fraseConBlanco: "Chií tashikai wanne wayuu _______",
    palabraFaltante: "anakajüinchi",
    fraseEspanol: "Mi papa es muy gracioso",
  },
  {
    fraseCompleta: "Tüirua minchikat anachonsü",
    fraseConBlanco: "_______ minchikat anachonsü",
    palabraFaltante: "Tüirua",
    fraseEspanol: "Estas casas son bonitas",
  },
  {
    fraseCompleta: "Ayüüisu türa la>ülakat",
    fraseConBlanco: "_______ türa la>ülakat",
    palabraFaltante: "Ayüüisu",
    fraseEspanol: "esa vieja esta enferma",
  },
  {
    fraseCompleta: "Türairüa tolekakat piratsü maiki",
    fraseConBlanco: "Türairüa tolekakat piratsü _______",
    palabraFaltante: "maiki",
    fraseEspanol: "Aquellos bultos están llenos de maíz",
  },
 
  // Agrega más frases según sea necesario
];

function iniciarJuego() {
  const fraseObj = frases[Math.floor(Math.random() * frases.length)];
  const fraseConBlanco = fraseObj.fraseConBlanco;
  const palabraFaltante = fraseObj.palabraFaltante;
  const fraseEspanol = fraseObj.fraseEspanol;

  const opciones = generarOpciones(palabraFaltante);
  mostrarJuego(fraseConBlanco, opciones, palabraFaltante,fraseEspanol);
}

function generarOpciones(palabraCorrecta) {
  const palabras = [
    "painjaka",
    "puikat",
    "sainjaka",
    "takorolo",
    "jintutkat",
    "tawala",
    "waya",
    "Shia",
    "kepian",
    "maalü",
    "Wuittusu",
    "Ishosü",
    "mawüika",
    "sushein",
    "jo>oüchon",
    "anakajüinchi",
    "Tüirua",
    "Ayüüisu",
    "maiki",
    // Agrega más palabras según sea necesario
  ];
  let opciones = [palabraCorrecta];

  while (opciones.length < 4) {
    const palabraAleatoria =
      palabras[Math.floor(Math.random() * palabras.length)];
    if (!opciones.includes(palabraAleatoria)) {
      opciones.push(palabraAleatoria);
    }
  }

  return opciones.sort(() => Math.random() - 0.5);
}

function mostrarJuego(fraseConBlanco, opciones, palabraCorrecta,fraseEspanol) {
  gameContainer.innerHTML = `
        <h1>Completa la frase <br></h1><br><br>
        <h3> ${fraseEspanol}</h3>
        <h3> ${fraseConBlanco}</h3><br><br>
        <div class="words">
            ${opciones
              .map(
                (palabra) =>
                  `<div class='opcionesPalabras' onclick="verificarRespuesta(this,'${palabra}', '${palabraCorrecta}')">${palabra}</div>`
              )
              .join("")}
        </div>
    `;
  cantPreg++;
}

function verificarRespuesta(element, palabraSeleccionada, palabraCorrecta) {
  let contenedor = document.querySelector(".words");

  contenedor.classList.add("bloquearPalabras");

  if (palabraSeleccionada === palabraCorrecta) {
    element.classList.add("correcta");
    pregCorr++;
  } else {
    element.classList.add("incorrecta");
  }

  

  setTimeout(() => {
    element.classList.remove("correcta");
    element.classList.remove("incorrecta");
    if (cantPreg <= 10) {
      iniciarJuego();
    } else {
      resultadoFinal();
    }

    contenedor.classList.remove("bloquearPalabras");
  }, 5000);
}

$(document).ready(function () {
  abrirModal();
});

function resultadoFinal() {
  $("#principal").fadeToggle(500);
  setTimeout(() => {
    $("#final").fadeToggle(1000);
  }, 500);
  if (pregCorr >= 6) {
    document.getElementById("final").style.backgroundImage =
      "url(../../images/victoria.gif)";
  } else {
    document.getElementById("final").style.backgroundImage =
      "url(../../images/derrota.gif)";
  }

  document.getElementById("texto_final").innerText =
    "Has identificado correctamente " + pregCorr + " frases de 10";
}

function abrirModal() {
  Swal.fire({
    title: "<strong>Juego de Completa Frases</strong>",
    type: "info",
    html: "En este juego deberás ingresar la palabra faltante en la frase para poder ganar.",
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Vamos!',
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: "Thumbs down",
    confirmButtonClass: "btn btn-primary",
    buttonsStyling: false,
    cancelButtonClass: "btn btn-danger ml-1",
  }).then((result) => {
    if (result.value) {
      activarPantallaCompleta();
      iniciarJuego();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      window.history.back();
    }
  });
}

function activarPantallaCompleta() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}
