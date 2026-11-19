// datos de cada persona del equipo y del elenco
const personas = [
  {
    nombre: "Martin Scorsese",
    rol: "Director",
    foto: "img/MartinScorsese.jpg",
    rodaje: "img/scorsese-rodaje.jpg",
    parrafo1: "Martin Scorsese nacio el 17 de noviembre de 1942 en Queens, Nueva York, y crecio en el barrio de Little Italy, en el seno de una familia italoamericana. De niño sufria de asma severa, por lo que no podia practicar deportes y pasaba mucho tiempo en el cine, algo que marco su vocacion para siempre. Durante un tiempo penso en hacerse sacerdote e ingreso a un seminario, pero lo abandono y termino estudiando cine en la Universidad de Nueva York.",
    parrafo2: "Sus primeros trabajos fueron cortos y la pelicula Who’s That Knocking at My Door, y en 1973 logro su primer gran reconocimiento con Mean Streets, donde conocio a Robert De Niro y Harvey Keitel, dos colaboradores que lo acompañarian durante decadas. Con Taxi Driver llego la consagracion internacional, y luego vinieron obras como Raging Bull, Goodfellas, Casino, Gangs of New York y The Aviator. En 2007 gano el Oscar a mejor director por The Departed. Ademas de dirigir, es un gran defensor de la preservacion del cine clasico: fundo The Film Foundation para restaurar peliculas antiguas, y tambien realizo documentales sobre musicos como Bob Dylan y George Harrison. Su obra gira una y otra vez alrededor de la culpa, la violencia, la fe y la identidad."
  },
  {
    nombre: "Paul Schrader",
    rol: "Guionista",
    foto: "img/Paulschrader.jpg",
    rodaje: "img/schrader-rodaje.png",
    parrafo1: "<b>Su trabajo en la pelicula:</b> escribio el guion en muy poco tiempo, durante una etapa de soledad e insomnio que inspiro al personaje de Travis.",
    parrafo2: "<b>El guionista:</b> nacio en Michigan en 1946. Despues volvio a trabajar con Scorsese escribiendo Toro salvaje."
  },
  {
    nombre: "Robert De Niro",
    rol: "Travis Bickle",
    foto: "img/RobertdeNiro.jpg",
    rodaje: "img/travis-rodaje.jpg",
    parrafo1: "Robert De Niro nacio el 17 de agosto de 1943 en Nueva York y se formo como actor con maestros como Stella Adler y Lee Strasberg. Empezo con papeles pequeños en el cine independiente, hasta que su trabajo en Mean Streets, bajo la direccion de Scorsese, lo puso en el radar de la industria. En 1974 gano el Oscar a mejor actor de reparto por interpretar al joven Vito Corleone en The Godfather Part II.",
    parrafo2: "Es famoso por su dedicacion extrema a los papeles: para Taxi Driver trabajo como taxista en Nueva York durante varias semanas, y para Raging Bull engordo cerca de treinta kilos, interpretacion que le dio su segundo Oscar. Su filmografia incluye The Deer Hunter, Goodfellas, Cape Fear, Casino y, ya en tono de comedia, Meet the Parents. En 2002 cofundo el Festival de Cine de Tribeca junto a Jane Rosenthal, con el objetivo de revitalizar el sur de Manhattan despues de los atentados del 11 de septiembre. Su Travis Bickle sigue siendo uno de los personajes mas imitados y recordados de la historia del cine."
  },
  {
    nombre: "Jodie Foster",
    rol: "Iris Steensma",
    foto: "img/jodiefoster.jpg",
    rodaje: "img/iris-rodaje.png",
    parrafo1: "Jodie Foster nacio el 19 de noviembre de 1962 en Los Angeles y empezo a trabajar frente a las camaras con apenas tres años, en comerciales de television. Cuando filmo Taxi Driver tenia solo doce, y su interpretacion de Iris, una adolescente atrapada en un mundo que no le correspondia, le valio una nominacion al Oscar como mejor actriz de reparto. Lejos de quedar encasillada como actriz infantil, estudio literatura en la Universidad de Yale y se graduo en 1985.",
    parrafo2: "Gano dos premios Oscar a mejor actriz, por The Accused en 1988 y por The Silence of the Lambs en 1991. Tambien se desarrollo como directora con peliculas como Little Man Tate y Home for the Holidays. Entre sus trabajos posteriores se destacan Contact, Panic Room y Nyad, y en 2024 gano un premio Emmy por la serie True Detective: Night Country. En 2021 recibio una Palma de Oro honoraria en Cannes por su trayectoria, y habla frances con fluidez."
  },
  {
    nombre: "Cybill Shepherd",
    rol: "Betsy",
    foto: "img/cybilshepherd.jpg",
    rodaje: "img/betsy-rodaje.jpg",
    parrafo1: "Cybill Shepherd nacio el 18 de febrero de 1950 en Memphis, Tennessee. Empezo como modelo adolescente y llego a la tapa de la revista Seventeen, lo que la llevo a Nueva York y a campañas publicitarias importantes. Su debut en el cine fue en The Last Picture Show, de Peter Bogdanovich, en 1971, un papel que la puso en el centro de la nueva generacion de Hollywood.",
    parrafo2: "En Taxi Driver interpreta a Betsy, una joven voluntaria de una campaña politica que representa para Travis algo que parece fuera de su alcance. En television alcanzo su mayor popularidad con Moonlighting, donde compartio protagonismo con Bruce Willis y gano un Globo de Oro. Mas tarde protagonizo la comedia Cybill, que tambien le dio un Globo de Oro. Ademas de actuar, tuvo una carrera como cantante de jazz y publico varios discos, y escribio sus memorias."
  },
  {
    nombre: "Harvey Keitel",
    rol: "Sport",
    foto: "img/harveykeitel.jpg",
    rodaje: "img/sport-rodaje.png",
    parrafo1: "Harvey Keitel nacio el 13 de mayo de 1939 en Brooklyn, Nueva York. Antes de ser actor sirvio en el Cuerpo de Marines de Estados Unidos y trabajo como taquigrafo judicial, hasta que decidio estudiar actuacion y se formo en el Actors Studio con Lee Strasberg. Fue el actor del primer largometraje de Scorsese, Who’s That Knocking at My Door, y luego protagonizo Mean Streets, estableciendo una de las duplas creativas mas fructiferas del cine.",
    parrafo2: "En Taxi Driver interpreta a Sport, un proxeneta que circula por las calles que Travis recorre cada noche. Su carrera incluye papeles memorables como Mr. White en Reservoir Dogs de Quentin Tarantino, el policia corrupto de Bad Lieutenant, The Piano, Thelma & Louise y Pulp Fiction, donde es el Sr. Lobo. Recibio una nominacion al Oscar por Bugsy y es considerado una de las figuras clave del cine independiente norteamericano."
  },
  {
    nombre: "Peter Boyle",
    rol: "Wizard",
    foto: "img/peterboyle.jpg",
    rodaje: "img/peterboyletd.jpg",
    parrafo1: "Peter Boyle nacio el 18 de octubre de 1935 en Norristown, Pennsylvania. Antes de dedicarse a la actuacion paso tres años como monje en la orden de los Hermanos Cristianos, una etapa que abandono para mudarse a Nueva York y probar suerte como actor. Su primer papel destacado fue el protagonista de Joe, en 1970, donde interpreto a un obrero racista y violento.",
    parrafo2: "Su interpretacion mas famosa en el cine fue la del monstruo en Young Frankenstein de Mel Brooks, con una escena de baile con sombrero de copa que quedo en la historia de la comedia. En Taxi Driver es Wizard, el taxista veterano con quien Travis comparte conversaciones en el garage. Para la television, alcanzo su mayor exito como Frank Barone, el padre gruñon de Everybody Loves Raymond, papel por el que recibio multiples nominaciones al Emmy. Fallecio el 12 de diciembre de 2006."
  },
  {
    nombre: "Albert Brooks",
    rol: "Tom",
    foto: "img/albertbrooks.jpg",
    rodaje: "img/tomalbertbrooks.jpg",
    parrafo1: "Albert Brooks nacio el 22 de julio de 1947 en Los Angeles, con el nombre de Albert Einstein, y adopto el apellido artistico Brooks siendo joven. Comenzo en el stand-up y en programas de television, donde desarrollo un humor neurotico, inteligente y muy observador. En Taxi Driver tuvo uno de sus primeros papeles en cine como Tom, el empleado de la campaña politica que trabaja junto a Betsy.",
    parrafo2: "Despues se consolido tambien como director y guionista de comedias como Real Life, Modern Romance, Lost in America y Defending Your Life. Recibio una nominacion al Oscar como actor de reparto por Broadcast News, y mas adelante se destaco en el thriller Drive, donde mostro una faceta totalmente distinta a la comica. Tambien presto su voz a Marlin en Finding Nemo y a varios personajes de The Simpsons."
  },
  {
    nombre: "Leonard Harris",
    rol: "Charles Palantine",
    foto: "img/leonard%20harriss.jpg",
    rodaje: "img/charlespalantinetd.png",
    parrafo1: "Leonard Harris es el actor que interpreta al senador Charles Palantine, el candidato presidencial cuya campaña aparece en el trasfondo de la pelicula y cuyo equipo incluye a Betsy y Tom. Antes de llegar al cine, Harris no era un actor de formacion tradicional: trabajo durante años como periodista y critico de arte y espectaculos para la television de Nueva York, y era una cara conocida en los noticieros locales. Esa experiencia frente a las camaras le dio la presencia y la naturalidad de un politico de discurso pulido.",
    parrafo2: "Su papel en Taxi Driver es uno de sus pocos trabajos como actor, y aun asi resulta clave, porque Palantine representa el mundo institucional y limpio que Travis observa desde afuera con tanta desconfianza. Su personaje funciona como contraste con las calles sucias que recorre el protagonista cada noche."
  },
  {
    nombre: "Diahnne Abbott",
    rol: "Vendedora del cine",
    foto: "img/DianneAbbotActress.png",
    rodaje: "img/diahnneabbotttd.jpg",
    parrafo1: "Diahnne Abbott es una actriz y cantante estadounidense nacida en Nueva York. En Taxi Driver interpreta a la joven que atiende el mostrador de golosinas en el cine condicionado para adultos al que Travis entra durante una de sus noches de soledad. Es un papel pequeño, pero queda grabado por la forma en que Scorsese filma el torpe intento de Travis por entablar una conversacion con ella.",
    parrafo2: "Su carrera se desarrollo sobre todo en el cine y la musica, y aparecio en varias peliculas de Scorsese, entre ellas New York, New York y The King of Comedy. Estuvo casada con Robert De Niro durante los años setenta y ochenta, y su familia con el actor tambien formo parte del mundo cercano al director. Ademas de actuar, desarrollo una carrera como cantante de jazz y nightclub."
  },
  // productoras: no tienen foto del rodaje, por eso rodaje va vacio
  {
    nombre: "Columbia Pictures",
    rol: "Columbia Pictures",
    foto: "img/COLUMBIA_PICTURES_ARTWORK.jpg",
    rodaje: "",
    parrafo1: "Columbia nacio en 1918 en Hollywood como un pequeño estudio fundado por los hermanos Harry y Jack Cohn junto a Joe Brandt, y en 1924 adopto el nombre de Columbia Pictures. Durante años fue considerado un estudio menor, hasta que las comedias de Frank Capra, como It Happened One Night, lo pusieron entre los grandes. Despues llegaron clasicos como On the Waterfront y Lawrence of Arabia. Hoy forma parte de Sony.",
    parrafo2: "A mediados de los años setenta el estudio atravesaba problemas economicos y empezo a apostar por directores jovenes y peliculas de bajo presupuesto. Taxi Driver era un proyecto arriesgado y oscuro, pero Columbia acepto financiarlo y distribuirlo con un presupuesto de menos de dos millones de dolares, en parte gracias al prestigio de los productores Michael y Julia Phillips. La apuesta salio bien: la pelicula fue un exito de taquilla, gano la Palma de Oro y fue nominada al Oscar a mejor pelicula."
  },
  {
    nombre: "Bill/Phillips Productions",
    rol: "Bill/Phillips Productions",
    foto: "img/billphilips.jpg",
    rodaje: "",
    parrafo1: "Bill/Phillips fue la productora del matrimonio Michael y Julia Phillips junto al actor Tony Bill, creada a principios de los años setenta. Su gran exito llego en 1973 con The Sting, que gano el Oscar a mejor pelicula y convirtio a Julia Phillips en la primera mujer productora en ganar ese premio. Mas tarde los Phillips tambien produjeron Close Encounters of the Third Kind de Steven Spielberg.",
    parrafo2: "Los Phillips compraron el guion de Paul Schrader cuando casi nadie en Hollywood queria tocarlo. Esperaron hasta que Scorsese y De Niro tuvieran el nombre suficiente para convencer a un estudio, algo que llego despues de Mean Streets y del Oscar de De Niro por The Godfather Part II. Con ese equipo y el exito reciente de The Sting, consiguieron que Columbia aceptara hacer la pelicula."
  }
];

// muestra la ficha con los datos de la persona elegida
function abrirFicha(numero) {
  const persona = personas[numero];

  document.getElementById("ficha-rol").innerText = persona.rol;
  document.getElementById("ficha-parrafo1").innerHTML = persona.parrafo1;
  document.getElementById("ficha-parrafo2").innerHTML = persona.parrafo2;
  document.getElementById("ficha-foto").src = persona.foto;

  // si no tiene foto del rodaje, se oculta esa imagen
  const fotoRodaje = document.getElementById("ficha-rodaje");
  if (persona.rodaje == "") {
    fotoRodaje.style.display = "none";
  } else {
    fotoRodaje.src = persona.rodaje;
    fotoRodaje.style.display = "block";
  }

  document.getElementById("fondo").style.display = "block";
  document.getElementById("ficha").style.display = "block";
}

// oculta la ficha
function cerrarFicha() {
  document.getElementById("fondo").style.display = "none";
  document.getElementById("ficha").style.display = "none";
}

// datos de cada imagen de la galeria
const escenas = [
  {
    imagen: "img/galeria1.png",
    texto: "Los ojos de Travis aparecen en el espejo retrovisor, rodeados por las luces rojas y verdes de la calle. Es la imagen que mejor resume la pelicula: un hombre que observa la ciudad de noche desde adentro de su taxi."
  },
  {
    imagen: "img/galeria2.png",
    texto: "Bien vestido y sonriente, Travis se apoya en el escritorio de Betsy, en la oficina de campaña de Palantine, para invitarla a salir. Es uno de los pocos momentos en los que parece encajar en el mundo de los demas."
  },
  {
    imagen: "img/galeria3.png",
    texto: "Travis esta acostado en su cama, con frascos de pastillas sobre una mesa detras de el y una lata de gaseosa a su lado. El lugar muestra la vida descuidada y solitaria que lleva cuando no esta trabajando."
  },
  {
    imagen: "img/galeria4.png",
    texto: "Travis mira la pantalla desde las butacas rojas de un cine casi vacio. Ir al cine es parte de su rutina para llenar las horas, y su expresion deja ver lo aislado que esta."
  },
  {
    imagen: "img/galeria5.png",
    texto: "Con la cabeza rapada en cresta, anteojos de sol y un pin de la campaña de Palantine, Travis sonrie entre el publico de un acto. Su nuevo aspecto muestra que ya tomo una decision y hace que esa sonrisa resulte inquietante."
  },
  {
    imagen: "img/galeria6.png",
    texto: "Durante un acto de Palantine, Travis conversa con un agente del servicio secreto y finge interes en sumarse a ese trabajo. Detras de su amabilidad, ya esta estudiando como acercarse al candidato."
  },
  {
    imagen: "img/galeria7.png",
    texto: "Travis sigue por la calle a Iris y a su amiga, en una Nueva York llena de carteles gastados y gente de paso. Este encuentro es el comienzo de su obsesion por sacarla de esa vida."
  },
  {
    imagen: "img/galeria8.png",
    texto: "Vista desde arriba, la escena muestra a Travis con el arma en la mano junto a un ladron caido en el piso del almacen. Es la primera vez que usa sus armas, y la violencia que venia imaginando se vuelve real."
  },
  {
    imagen: "img/galeria9.png",
    texto: "Travis mira hacia afuera desde el asiento de su taxi. El vidrio y el marco de la ventanilla lo separan de la ciudad, como en casi toda la pelicula: esta en medio de todo, pero siempre aparte."
  },
  {
    imagen: "img/galeria10.png",
    texto: "De espaldas y con el tubo en la mano, Travis habla por un telefono publico para intentar recuperar a Betsy despues de la cita que salio mal. La imagen deja ver lo incomodo y lo solo que esta en ese momento."
  }
];

// muestra la ventana con la imagen y el texto de la escena elegida
function abrirEscena(numero) {
  const escena = escenas[numero];

  document.getElementById("escena-imagen").src = escena.imagen;
  document.getElementById("escena-imagen").alt = document.querySelectorAll(".foto-galeria img")[numero].alt;
  document.getElementById("escena-texto").innerText = escena.texto;

  document.getElementById("fondo-escena").style.display = "block";
  document.getElementById("ventana-escena").style.display = "block";
  document.getElementById("cerrar-escena").focus();
}

// oculta la ventana
function cerrarEscena() {
  document.getElementById("fondo-escena").style.display = "none";
  document.getElementById("ventana-escena").style.display = "none";
}