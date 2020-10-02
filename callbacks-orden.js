const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", "1")}`;

const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(url, opts, callback).fail(() => {
    console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`);
  });
}

// fail() es la que indica que hacer en caso de un error

// CallbacksHell

// function obtenerPersonaje(id, callback)

obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`);

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);

    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola, yo soy ${personaje.name}`);

      obtenerPersonaje(4, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`);
      });
    });
  });
});

// De esta manera los request se hacen en serie y no es paralelo

// La funcion solos e ejecuta si el request es exitoso (succes)
