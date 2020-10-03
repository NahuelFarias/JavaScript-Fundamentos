const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", "1")}`;

const opts = { crossDomain: true };
const onPeopleResponse = function (person) {
  console.log(`Hola, yo soy ${person.name}`);
};

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, opts, onPeopleResponse);
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);

// De esta manera el orden depende de cuanto tarde la API en responder

// $.get(lukeUrl, opts, onPeopleResponse);

// La funcion solos e ejecuta si el request es exitoso (succes)
