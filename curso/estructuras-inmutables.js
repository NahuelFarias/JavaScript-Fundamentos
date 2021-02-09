const sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
};

// const cumpleanios = (persona) => persona.edad++;

// Realiza un objeto nuevo
const cumpleaniosInmutable = (persona) => ({
  ...persona,
  edad: persona.edad + 1,
});
