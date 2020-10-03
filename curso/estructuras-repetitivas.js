// En el curso anterior de Fundamentos, Sacha enseñaba cómo podemos generar un número aleatorio entre dos números que queramos:

const numMax = 10;
const numMin = 1;

const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin);
// redondeamos el decimal que nos devuelve envolviendo todo en Math.round

numRandom(); // 8
numRandom(); // 5
numRandom(); // 1
numRandom(); // 10
// Espero que les sea útil para futuras ideas ! 👍🏻

// Clase: for

var javier = {
  nombre: "javier",
  edad: 23,
  peso: 70,
};

console.log(`Al inicio del año ${javier.nombre} pesa ${javier.peso} Kg`);

// Nota: Los magic numbers son aquellos datos que incluimos en nuestro
// codigo pero nunca explicamos el porque de ellos lo cual resulta poco descriptirmo
// para otros programadores. Para ello pdemos extraerlos y nombrarlos de forma
// autoexplicativa como se hizo con los dias del año y la cantidad de peso.

const DIAS_DEL_ANIO = 365;
const INCREMENO_DE_PESO = 0.2;

// Con las siguientes arrow functions al pasarle el objeto este se modifica, en cambio si lo destrucutramos,
// solo tomaria el valor del parametro en cuestion

const aumentarDePeso = (persona) => (persona.peso += INCREMENO_DE_PESO);

const bajarDePeso = (persona) => (persona.peso -= INCREMENO_DE_PESO);

// Estructura de un ciclo for

for (let i = 0; i <= DIAS_DEL_ANIO; i++) {
  // Creacion de un numero random cuyo resultado se ocupara para saber si se dispara
  // un aumento o un decremento en el peso de la persona
  var random = Math.random();

  if (random < 0.25) {
    aumentarDePeso(javier);
  } else if (random < 0.5) {
    bajarDePeso(javier);
  }
}

// function toFixed(n) Nos sirve para reducir la cantidad de decimales despues del punto a 'n'

console.log(`A fin del año ${javier.nombre} pesa ${javier.peso.toFixed(1)} Kg`);

// Ej While

const KILOS_A_BAJAR = 3;
const META = javier.peso - KILOS_A_BAJAR;

const comeMucho = (persona) => Math.random() < 0.3;
const realizarDeporte = (persona) => Math.random() < 0.5;

var dias = 0;

while (javier.peso > META) {
  // Para debuggear utilizamos la palabra -> debugger
  if (comeMucho()) {
    aumentarDePeso(javier);
  }

  if (realizarDeporte()) {
    bajarDePeso(javier);
  }

  dias++;
}

console.log(`Pasaron ${dias} dias hasta que ${javier.nombre} logro bajar 3 Kg`);

// Ej do while :

var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
  contador++;
} while (!llueve());

if (contador === 1) {
  console.log(`Fui a ver si llovia ${contador} vez.`);
} else {
  console.log(`Fui a ver si llovia ${contador} veces.`);
}

// Otra Forma :

// var contador = 0;

// var llueve = () => Math.random()>0.25;

// do{
//   contador++;
// }while(!llueve());

// var frecuencia = contador===1 ? "vez":"veces";
// console.log(`Fui a ver si llovía ${contador}${frecuencia}`);

// Ej switch

// Objeto que guarda los horoscopos, se imprimen los horoscopos no importando como se escriba May/Min
const horoscopos = {
  aries: "21 marzo - 19 abril",
  tauro: "20 abril - 20 mayo",
  geminis: "21 mayo - 20 junio",
  cancer: "21 junio - 22 julio",
  leo: "23 julio - 22 agosto",
  virgo: "23 agosto - 22 septiembre",
  libra: "23 septiembre - 22 octubre",
  escorpion: "23 octubre - 21 noviembre",
  sagitario: "22 noviembre - 21 diciembre",
  capricornio: "22 diciember - 19 enero",
  acuario: "20 enero - 18 febrero",
  piscis: "19 febrero - 20 marzo",
};

// Evalua el signo y regresa el horóscopo
const calcularSigno = function (signo) {
  switch (signo.toLowerCase()) {
    case "aries":
      console.log(horoscopos.aries);
      break;
    case "tauro":
      console.log(horoscopos.tauro);
      break;
    case "geminis":
    case "géminis":
      console.log(horoscopos.geminis);
      break;
    case "cancer":
    case "cáncer":
      console.log(horoscopos.cancer);
      break;
    case "leo":
      console.log(horoscopos.leo);
      break;
    case "virgo":
      console.log(horoscopos.virgo);
      break;
    case "libra":
      console.log(horoscopos.libra);
      break;
    case "escorpion":
    case "escorpión":
      console.log(horoscopos.escorpion);
      break;
    case "sagitario":
      console.log(horoscopos.sagitario);
      break;
    case "capricornio":
      console.log(horoscopos.capricornio);
      break;
    case "acuario":
      console.log(horoscopos.acuario);
      break;
    case "piscis":
      console.log(horoscopos.piscis);
      break;
    default:
      console.log("Ese signo no existe");
      break;
  }
};

// Arrow function que sirve para seguir preguntando el signo que quieres ver hasta que se escriba la palabra "salir"
var preguntarSigno = () =>
  (signoZodiacal = prompt(
    "¿Cuál es tu signo? Escribe salir si desea salir de la apliación."
  ));

// Asigna valor a la variable signoZodiacal para entrar al while
preguntarSigno();

// Se ejecuta mientras el usuario no escriba la palabra "salir"
while (signoZodiacal.toLowerCase() !== "salir") {
  calcularSigno(signoZodiacal);
  preguntarSigno();
}
