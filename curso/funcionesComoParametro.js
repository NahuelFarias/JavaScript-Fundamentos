class Persona {
  // Metodo constructor de Persona
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn) {
    // var nombre = this.nombre;
    // var apellido = this.apellido;

    var { nombre, apellido } = this;

    console.log(`Hola, me llamo ${nombre} ${apellido}`);

    if (fn) {
      fn(nombre, apellido);
    }
  }

  soyAlto() {
    if (this.altura > 1.7) {
      console.log(`Sol alto y mido ${this.altura}`);
    } else {
      console.log(`No soy alto, mido ${this.altura}`);
    }
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura); // 'super' se utiliza para usar el constructor del prototipo padre
  }

  saludar(fn) {
    var { nombre, apellido } = this;

    console.log(`Hola soy ${nombre} ${apellido} y soy desarrolador/a`);

    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mirá, no sabia que eras dev`);
  }
}

var nahuel = new Desarrollador("Nahuel", "Farias", 1.6);
var lula = new Persona("Lucila", "Silva", 1.65);
var walter = new Persona("Waler", "Farias", 1.78);

nahuel.saludar(responderSaludo);
lula.saludar(responderSaludo);
walter.saludar();
