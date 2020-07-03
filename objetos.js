// Los objetos se definen con {}(llaves) para asignarlo a una variable se hace de esta manera var ejemplo = {}

// Los objetos se componen por propiedades y valores, se utiliza ’,' para separar cada propiedad

var miObjeto = {
	//propiedad: 'valor'
	direccion: 'Alguna direccion, caracas, venezuela',
	//key:	     'value' (en ingles)
	codigoPostal: '1020'
}

// Los objectos pueden recibir como valor en sus propiedades, cadenas de texto (string), valores numericos (int) y booleanos. 
// Tambien puedes realizar operaciones dentro de los valores. Ejemplo:

let objeto2 = {
	'string' : 'Hola soy una cadena de texto',
	'int': 123,
	'boolTrue': true,
	'boolFalse': false,
	'sumar': 5+5,
	'minuscula': 'TEXTO'.toLowerCase()
}

// Los objetos se pueden enviar por para parámetro a alguna función de esta manera:

function suma({n1,n2}){
	var operacion = n1 + n2
	console.log(operacion)
}

var miSuma = {
	n1: 5,
	n2: 10
}

suma(miSuma) // Salida ->15
suma({n1:100, n2: 100 + 50}) // Salida -> 250
suma({n1: 100 - 1, n2: (200 * 2) + 1  }) // Salida -> 500

// ---------------------------------------------------------------------

// Para agregarle algo a la clase, tambien se puede desestructurar un objeto de un objeto para obtener sus valores ejemplo:

var obj1 = {
	obj2 : {
		nombre: 'Nahuel',
		edad: 20
	}
}

function saludar(obj){
	var {nombre, edad} = obj.obj2
	console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

saludar(obj1) // Salida ->  Hola me llamo Nahuel y tengo 20 años

// ---------------------------------------------------------------------

/**** 
 * JavaScript se comporta diferente con los objetos.
 * Cuando una función recibe un objeto como parámetro, 
 * se pasan por referencia, esto quiere decir que 
 * si los modificamos dentro del cuerpo de una función
 * su valor se va a ver modificado fuera de la misma.
 */

var carola = {
    nombre:   'Carola',
    apellido: 'Garcia',
    edad:     30
}

function cumpleanos(persona){
    persona.edad += 1
}

// Una de las soluciones para que cuando se le pase un objeto como parámetro y no lo modifique, sería copiar ese objeto, 
// modificar en ese lo que se quiera modificar y retornarlo. Tambien se puede agregar atributos al objeto copiado
// Para esto usamos ...Objeto, parametrosAModif:

function cumpleanosCopiaObj(persona){
    return{
        ...persona,
        edad: persona.edad + 1,
        mensaje: "Feliz cumple Carola!"
    }
}

// A los tres puntos “…” se llama operador de propagación (Spread operator), es una nueva implementación en ES6.
// Básicamente lo que hace es crear un duplicado de nuestro objeto para luego modificarlo según lo que necesitemos.