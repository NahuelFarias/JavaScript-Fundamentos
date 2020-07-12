// Herencia prototipal (Lo mas parecido a herencia con clases)

function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {}; // Esta funcion no hace nada
  fn.prototype = prototipoPadre.prototype; // Todas las funciones tienen el atributo prototype
  prototipoHijo.prototype = new fn(); // Para no pisar el prototype del Padre, usamos la function fn()
  prototipoHijo.prototype.constructor = prototipoHijo; // Asignamos la function constructora
}

// Prototipo (Lo mas similar a clases dentro de JS)

function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

// Funciones Del Prototipo (Metodos de los prototipos)

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soyAlto = function () {
  if (this.altura > 1.7) {
    console.log(`Sol alto y mido ${this.altura}`);
  } else {
    console.log(`No soy alto, mido ${this.altura}`);
  }
};

function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

// Hereda todas las funciones/metodos de persona
heredaDe(Desarrollador, Persona);

// Pisamos la funcion/metodo saludar
Desarrollador.prototype.saludar = function () {
  console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrolador/a`);
};

// Esta arrow function no funciona correctamente porque 'this' hace referencia a 'window' (Objeto global)
// Persona.prototype.soyAlto = () => this.altura > 1.7;

var nahuel = new Persona("Nahuel", "Farias", 1.6);
var lula = new Persona("Lucila", "Silva", 1.65);
var walter = new Persona("Waler", "Farias", 1.78);
