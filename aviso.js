// aviso de contenido sensible que aparece al entrar a la web
// este archivo se carga al principio del body de todas las paginas

// revisa si ya acepto el aviso en esta visita
function yaAcepto() {
  try {
    return sessionStorage.getItem("avisoAceptado") == "si";
  } catch (error) {
    return false;
  }
}

// guarda que acepto, asi no se vuelve a preguntar en las otras paginas
function guardarAceptado() {
  try {
    sessionStorage.setItem("avisoAceptado", "si");
  } catch (error) {
    // si el navegador no deja guardar, el aviso vuelve a aparecer en la proxima pagina
  }
}

function mostrarAviso() {
  const aviso = document.createElement("dialog");
  aviso.className = "aviso";
  aviso.innerHTML = `
    <h2>Aviso de contenido sensible</h2>
    <p>Esta web incluye imagenes, videos y textos de Taxi Driver (1976), una pelicula para adultos. Puede contener:</p>
    <ul>
      <li>Violencia grafica y sangre</li>
      <li>Armas de fuego</li>
      <li>Temas de prostitucion y abuso (en la ficcion)</li>
      <li>Referencias a pornografia</li>
      <li>Consumo de pastillas y drogas</li>
      <li>Lenguaje ofensivo</li>
      <li>Spoilers de toda la pelicula, incluido el final</li>
    </ul>
    <p class="aviso-pregunta">¿Queres entrar igual?</p>
    <div class="aviso-botones">
      <button id="aviso-si">Si, entrar</button>
      <button id="aviso-no">No</button>
    </div>
    <p class="aviso-salida" id="aviso-salida">No vas a ver el contenido. Ya podes cerrar esta pestaña.</p>
  `;

  document.body.prepend(aviso);

  let acepto = false;

  // si se cierra sin aceptar (por ejemplo con la tecla Escape), se vuelve a abrir
  aviso.addEventListener("close", function () {
    if (!acepto) {
      aviso.showModal();
    }
  });

  document.getElementById("aviso-si").addEventListener("click", function () {
    acepto = true;
    guardarAceptado();
    aviso.close();
    aviso.remove();
  });

  document.getElementById("aviso-no").addEventListener("click", function () {
    document.getElementById("aviso-salida").style.display = "block";
  });

  aviso.showModal();
}

if (!yaAcepto()) {
  mostrarAviso();
}
