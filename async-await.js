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

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7];
  // var promesas = ids.map(function (id) {
  //   return obtenerPersonaje(id);
  // });
  var promesas = ids.map((id) => obtenerPersonaje(id));
  try {
    var personajes = await Promise.all(promesas); // Tarea asincrona
    console.table(personajes);
  } catch (id) {
    onError(id);
  }
}
// La ejecucion de la funcion se frena en el await hasta que todas las promesas sean resueltas

obtenerPersonajes();
