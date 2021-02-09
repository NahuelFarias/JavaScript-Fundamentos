function diasEntreFechas(fecha1, fecha2) {
  const UN_DIA = 1000 * 60 * 60 * 24; // Milisegundos en un dia
  const DIFERENCIA = Math.abs(fecha1 - fecha2);

  return Math.floor(DIFERENCIA / UN_DIA);
}

const HOY = new Date();
const NACIMIENTO = new Date(1999, 7, 8);
