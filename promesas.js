const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";

const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    // --- llamado asíncrono
    $.get(url, opts, function (data) {
      resolve(data); // -- se ejecutó el llamado exitosamente
    }).fail(() => reject(id)); // -- hubo un error en el llamado
  });
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

// obtenerPersonaje(1)
//   // -- Caso de exito
//   .then((personaje) => {
//     console.log(`El personaje 1 es ${personaje.name}`);
//   })
//   // -- Caso de error
//   .catch(onError);

// Con las PROMESAS se pueden hacer callbacks sin caer en el CallbacksHell

// Request en serie y en orden
// obtenerPersonaje(1)
//   // -- Caso de exito
//   .then((personaje1) => {
//     console.log(`El personaje 1 es ${personaje1.name}`);
//     return obtenerPersonaje(2);
//   })
//   .then((personaje2) => {
//     console.log(`El personaje 2 es ${personaje2.name}`);
//     return obtenerPersonaje(3);
//   })
//   .then((personaje3) => {
//     console.log(`El personaje 3 es ${personaje3.name}`);
//     return obtenerPersonaje(4);
//   })
//   .then((personaje4) => {
//     console.log(`El personaje 4 es ${personaje4.name}`);
//   })
//   // -- Caso de error
//   .catch(onError);

var ids = [1, 2, 3, 4, 5, 6, 7];
// var promesas = ids.map(function (id) {
//   return obtenerPersonaje(id);
// });
var promesas = ids.map((id) => obtenerPersonaje(id));

// Request en paralelo
Promise.all(promesas)
  .then((personajes) => console.table(personajes))
  .catch(onError);
