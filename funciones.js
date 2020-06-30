/*
 * Las funciones son pedazos de codigo 
 * reutilizables 
 * 
 * Para declarar una funcion se emplea la 
 * palabra reservada function
 * 
 * function nombreFuncion (parametros)
 * {
 *    cuerpo de la funcion, cod reutilizable
 * }
 */

var nombre = 'Sacha', edad = 28;

functionimprimirEdad(){
   console.log(`${nombre} tiene ${edad} años`)
}

imprimirEdad();

functionimprimirEdad2(n, e){
   console.log(`${n} tiene ${e} años`)
}
imprimirEdad2(nombre, edad);
imprimirEdad2('Paula', 54);
imprimirEdad2('Carlos', 23);

//Si una función la creamos con parametros
//Pero no se los enviamos, no va a salir error
//Intentará imprimir pero pondrá undefined en los
//parametros que no ingresemos. Esto debido a
// que js es debilmente tipado
imprimirEdad2('Caro');
imprimirEdad2();