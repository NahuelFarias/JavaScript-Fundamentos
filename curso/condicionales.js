var nahuel = {
  nombre: "Nahuel",
  edad: 20,
  profesion: "Estudiante",
};

var lucila = {
  nombre: "Lucila",
  edad: 15,
  profesion: "Estudiante",
};

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad. Y tiene ${persona.edad}`);
  } else {
    console.log(`${persona.nombre} es menor de edad. Y tiene ${persona.edad}`);
  }
}

imprimirSiEsMayorDeEdad(nahuel);

imprimirSiEsMayorDeEdad(lucila);

// Otra forma

var anthonyPerson = {
  nombre: "anthony",
  edad: 19,
};

function mayoriaDeEdad({ nombre, edad }) {
  if (edad > 17) {
    console.log(`${nombre} es mayor de edad, tiene ${edad} años`);
  } else {
    console.log(`${nombre} es menor de edad, tiene ${edad} años`);
  }
}

mayoriaDeEdad(anthonyPerson);
