var nombre = 'Nahuel', apellido = 'Vega'

//Transformar un string a mayúsculas
var nombreEnMayusculas = nombre.toUpperCase()

//Transformar un string a minúsculas
var apellidoEnMinusculas = apellido.toLowerCase()

//Extraer la primera letra de un string
var primeraLetraDelNombre = nombre.charAt(0)

//Para saber la cantidad de caracteres que tiene un string
var cantidadDeLetrasDelNombre = nombre.length

//Concatenar 2 strings:
var nombreCompleto = nombre + ' ' + apellido

//Otra forma de concatenar es la Interpolación de Textos
var nombreEntero = `${nombre} ${apellido}`

//Interpolación de textos incluyendo código JS
var nombreEnteroCodigo = `${nombre} ${apellido.toUpperCase()}`

//Substring - Extraer caracteres de un string
var str = nombre.substr(1, 2)

//Mostrar la última letra de un string
var ultimaLetraDelNombre = nombre.substr((cantidadDeLetrasDelNombre-1), 1)