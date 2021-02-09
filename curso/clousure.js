function crearSaludo(finalDeFrase) {
  // Funcion generadora
  return function (nombre) {
    console.log(`Hola ${nombre} ${finalDeFrase}`);
  };
}

// Con crear saludo defino nuevas funciones, que recuerdan el parametro que se les paso
// Todos estos saludos son funciones nuevas que se crearon en el momento
const saludoArgentino = crearSaludo("che");
const saludoMexicano = crearSaludo("wey");
const saludoColombiano = crearSaludo("parce");

// Aqui invocamos a las funciones nuevas que se crearon, las mismas ya
// recuerdan cual era su finalDeFrase
saludoArgentino("Sacha");
saludoMexicano("Sacha");
saludoColombiano("Sacha");
