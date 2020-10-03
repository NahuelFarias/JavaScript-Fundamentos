var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72,
  cantidadDeLibros: 111,
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
  cantidadDeLibros: 78,
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
  cantidadDeLibros: 132,
};

var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71,
  cantidadDeLibros: 90,
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
  cantidadDeLibros: 91,
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
  cantidadDeLibros: 182,
};

var personas = [sacha, alan, martin, dario, vicky, paula];

for (var i = 0; i <= personas.length; i++) {
  persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura} mts`);
}

// Metodo filter

const esAlta = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => !esAlta({ altura }); //RETO

// Metodo para filtrar arreglos (recibe un array como parametro)
var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personasBajas);

// Metodo map

// De la soguiente menera se modifica el objeto en si.
// const alturaEnCms = (persona) => {
//   // altura = persona.altura * 100;
//   persona.altura *= 100;
//   return persona;
// };

// De la soguiente menera NO se modifica el objeto en si.
const alturaEnCms = (persona) => {
  return {
    ...persona,
    altura: persona.altura * 100,
  };
};

// Una manera mas prolija de hacer la funcion anterior, sintaxis que se puede utilizar si solo retornamos un objeto.
// const alturaEnCms = (persona) => ({
//   ...persona,
//   altura: persona.altura * 100,
// });

var personasEnCms = personas.map(alturaEnCms);

console.log(personasEnCms);

// Metodo reduce

// var acum = 0;

// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros;
// }

// Version de funcion reduce, mas basica

// const reducer = (acum, persona) => {
//   return acum + persona.cantidadDeLibros;
// };

// Version mas pro:

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, 0);

// reduce(funcionReductora, valor Inicial);

console.log(`En total todos tienen ${acum} libros`);
