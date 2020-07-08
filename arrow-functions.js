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

// Arrow Function

const esMayorDeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD;

const esMenorDeEdad = (persona) => !esMayorDeEdad(persona);

function permitirAcceso(persona) {
  if (esMenorDeEdad(persona)) {
    console.log("Acceso Denegado");
  } else {
    console.log("Acceso Valido");
  }
}

// Si queremos desesctrucutear el paramtro
// const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;

// Opción utilizando el operador ternario con Javascript, para escribir un if en una sola línea:

// const permitirAcceso = ({ edad }) => !esMayorDeEdad({ edad }) ? console.log('Acceso denegado') : console.log('Adelante')

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad. Y tiene ${persona.edad}`);
  } else {
    console.log(`${persona.nombre} es menor de edad. Y tiene ${persona.edad}`);
  }
}

imprimirSiEsMayorDeEdad(nahuel);

imprimirSiEsMayorDeEdad(lucila);
