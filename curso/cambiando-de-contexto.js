// El contexto en javascript está definido por el objeto ‘this’ cuando se ejecuta un código.
// Es muy común el error: ‘No se puede ejecutar este método porque es indefinido’, esto sucede porque el ‘this’
// no es quien esperamos que sea.

// Dado el siguiente código:

const pablo = {
  nombre: "Pablo",
  apellido: "Andrés",
};
const mariela = {
  nombre: "Mariela",
  apellido: "Riesnik",
};

function saludar() {
  console.log(`Hola, mi nombre es ${this.nombre}`);
}

// Si ejecuto:

saludar();
// Hola, mi nombre es undefined

// Ya que tenemos la función definida dentro de un contexto global el 'this' en saludar() refiere al objeto 'window'. Por lo tanto
// es lo mismo que:

window.saludar();
// Hola, mi nombre es undefined

// Cómo hacemos para cambiar ese ‘this’ de la función?
// El método ‘.bind()’ se usa justamente para cambiar en contexto, el ‘this’, en una función.

const saludarAPablo = saludar.bind(pablo);
const saludarAMariela = saludar.bind(mariela);

// ‘.bind()’ nos devuelve una nueva función atando el parámetro,_ ‘(pablo)’_ en este caso, al ‘this’ dentro de esa función, saludar
// en este caso.
// Este nunca modifica a la función original.

saludarAPablo();
// Hola, mi nombre es Pablo

saludarAMariela();
// Hola, mi nombre es Mariela

// Otra forma de usarlo:

setTimeout(saludar.bind(pablo), 1000) == setTimeout(saludarAPablo, 1000);

// Y otra, agregado un parámetro a la función:

function saludar(saludo = "Hola") {
  console.log(`${saludo}, mi nombre es ${this.nombre}`);
}
setTimeout(saludar.bind(pablo, "Hola loco!"), 1000);
// Hola loco!, mi nombre es Pablo

//también se puede agragar en la declaración de la constante.
const saludarAPablo = saludar.bind(pablo, "Hola loco!!");
// Hola loco!!, mi nombre es Pablo

// El primer parámetro es el contexto y luego van los siguientes parámetros en el orden en el que aparezcan.

// IMPORTANTE!!!
// La función .bind() no ejecuta la función a la que se agrega, sino que simplemente nos retorna una nueva función con ese contexto cambiado.
// Usando el método .bind, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.

// Otros dos métodos que nos sirven para cambiar el contexto son: .call y .apply.

// Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado.

saludar.call(pablo);
// Hola, mi nombre es Pablo  -  se ejecuta inmediatamente

saludar.bind(pablo);
// no produce ningún resultado, no la ejecuta.

// Al .call le pasamos los parámetros separados por ‘,’ igual que en el .bind.

saludar.call(pablo, "Hola cheeee!!");
// Hola cheeee!!, mi nombre es Pablo

// Usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores.

saludar.apply(pablo, ["Hola mi querido"]);
// Hola mi querido, mi nombre es Pablo

// Manejar a dónde refiere el ‘.this’ es algo que tenemos que tener muy presente, sobretodo cuando escribimos en modo asíncrono,
// ya que siempre que ejecutemos una función de esta naturaleza el ‘.this’ siempre cambia y es muy importante atarlo a nuestra clase,
// objeto o función.
