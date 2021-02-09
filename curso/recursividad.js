function divisionEntera(dividendo, divisor) {
  if (dividendo < divisor) {
    return 0; // CASO BASE
  }
  // CASO RECURSIVO
  return 1 + divisionEntera(dividendo - divisor, divisor);
}
