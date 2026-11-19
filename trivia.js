// preguntas de la trivia
// "correcta" es la posicion de la respuesta correcta dentro de "opciones" (se empieza a contar desde 0)
const preguntas = [
  {
    pregunta: "La frase mas famosa de la pelicula fue improvisada por De Niro frente al espejo. ¿Cual es?",
    opciones: [
      "\"Twelve hours of work and I still can't sleep. Damn. Days go on and on. They don't end.\"",
      "\"You talkin' to me?\"",
      "\"Loneliness has followed me my whole life. Everywhere. In bars, in cars, sidewalks, stores, everywhere. There's no escape. I'm God's lonely man.\"",
      "\"Here is a man who would not take it anymore. A man who stood up against the scum, the dogs, the filth...\""
    ],
    correcta: 1
  },
  {
    pregunta: "El compositor de la banda sonora murio horas despues de terminar de grabarla. ¿Quien era?",
    opciones: ["John Williams", "Ennio Morricone", "Bernard Herrmann", "Jerry Goldsmith"],
    correcta: 2
  },
  {
    pregunta: "¿Quien aparece como el pasajero celoso que le cuenta a Travis que quiere matar a su esposa?",
    opciones: ["Martin Scorsese, el director", "Paul Schrader, el guionista", "Harvey Keitel", "Un taxista real de Nueva York"],
    correcta: 0
  },
  {
    pregunta: "¿Cuantos años tenia Jodie Foster cuando filmo la pelicula?",
    opciones: ["10", "12", "14", "16"],
    correcta: 1
  },
  {
    pregunta: "¿Que premio gano Taxi Driver en el Festival de Cannes de 1976?",
    opciones: ["El Gran Premio del Jurado", "Mejor director", "Mejor actor", "La Palma de Oro"],
    correcta: 3
  },
  {
    pregunta: "¿Cuantos premios Oscar gano la pelicula?",
    opciones: ["Ninguno, aunque tuvo 4 nominaciones", "Uno, a mejor guion", "Dos, a mejor actor y mejor musica", "Cuatro"],
    correcta: 0
  },
  {
    pregunta: "En algunas escenas, Jodie Foster fue reemplazada por una doble. ¿Quien fue?",
    opciones: ["Una actriz de 18 años", "Su hermana mayor, Connie Foster", "Su madre", "Cybill Shepherd"],
    correcta: 1
  },
  {
    pregunta: "¿Que cambio Scorsese en el tiroteo final para que la pelicula no recibiera una clasificacion X?",
    opciones: ["Corto la escena a la mitad", "La filmo en blanco y negro", "Le bajo la saturacion a los colores para que la sangre se viera menos roja", "Agrego musica encima de los disparos"],
    correcta: 2
  },
  {
    pregunta: "En 1981, un hombre obsesionado con la pelicula y con Jodie Foster intento asesinar a un presidente. ¿A cual?",
    opciones: ["Jimmy Carter", "Gerald Ford", "Richard Nixon", "Ronald Reagan"],
    correcta: 3
  },
  {
    pregunta: "¿Como se logro el corte mohicano de Travis?",
    opciones: ["De Niro se rapo de verdad", "Era una peluca", "Con una protesis de maquillaje que simulaba la cabeza rapada", "Lo agregaron en la edicion"],
    correcta: 2
  }
];

// crea las preguntas en la pagina a partir de la lista
function armarTrivia() {
  let html = "";

  for (let i = 0; i < preguntas.length; i++) {
    html += '<div class="pregunta" id="pregunta' + i + '">';
    html += "<h3>" + (i + 1) + ". " + preguntas[i].pregunta + "</h3>";

    // un boton de opcion (radio) por cada respuesta. Todos los de una pregunta tienen el mismo name,
    // asi solo se puede elegir uno
    for (let j = 0; j < preguntas[i].opciones.length; j++) {
      html += '<label><input type="radio" name="p' + i + '" value="' + j + '"> ' + preguntas[i].opciones[j] + "</label>";
    }

    // aca se escribe la respuesta correcta despues de corregir
    html += '<p class="respuesta" id="respuesta' + i + '"></p>';
    html += "</div>";
  }

  document.getElementById("preguntas").innerHTML = html;
}

// revisa las respuestas, marca cada pregunta y muestra la nota
function corregir() {
  let aciertos = 0;

  for (let i = 0; i < preguntas.length; i++) {
    const elegida = document.querySelector('input[name="p' + i + '"]:checked');
    const caja = document.getElementById("pregunta" + i);
    const respuesta = document.getElementById("respuesta" + i);

    if (elegida != null && Number(elegida.value) == preguntas[i].correcta) {
      aciertos++;
      caja.classList.add("correcta");
      respuesta.innerText = "¡Correcto!";
    } else {
      caja.classList.add("incorrecta");
      const textoCorrecto = preguntas[i].opciones[preguntas[i].correcta];
      if (elegida == null) {
        respuesta.innerText = "No respondiste. La respuesta correcta era: " + textoCorrecto;
      } else {
        respuesta.innerText = "Incorrecto. La respuesta correcta era: " + textoCorrecto;
      }
    }
  }

  // despues de corregir ya no se pueden cambiar las respuestas
  const opciones = document.querySelectorAll("#preguntas input");
  for (let k = 0; k < opciones.length; k++) {
    opciones[k].disabled = true;
  }

  document.getElementById("nota").innerText = "Tu nota: " + aciertos + "/10";

  let mensaje = "";
  if (aciertos == 10) {
    mensaje = "¡Perfecto! Sabes todo sobre Taxi Driver.";
  } else if (aciertos >= 7) {
    mensaje = "¡Muy bien! Conoces mucho de la pelicula.";
  } else if (aciertos >= 4) {
    mensaje = "Nada mal, pero hay datos que se te escaparon.";
  } else {
    mensaje = "Te conviene volver a ver la pelicula y probar otra vez.";
  }
  document.getElementById("mensaje-nota").innerText = mensaje;

  document.getElementById("resultado").style.display = "block";
  document.getElementById("boton-corregir").style.display = "none";
  document.getElementById("boton-reintentar").style.display = "inline-block";
  document.getElementById("resultado").scrollIntoView();
}

// vuelve a armar la trivia vacia para intentar de nuevo
function reintentar() {
  armarTrivia();
  document.getElementById("resultado").style.display = "none";
  document.getElementById("boton-corregir").style.display = "inline-block";
  document.getElementById("boton-reintentar").style.display = "none";
  document.getElementById("arriba").scrollIntoView();
}

armarTrivia();
