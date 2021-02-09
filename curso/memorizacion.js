// EJEMPLO CON FACTORIAL

function factorial(numero) {
  if (!this.cache) {
    this.cache = {};
  }

  if (this.cache[numero]) {
    return this.cache[numero];
  }

  if (numero === 1) {
    return 1;
  }

  this.cache[numero] = numero * factorial(numero - 1);
  return this.cache[numero];
}

// Lo que realiza es guardar en el elemento cache las operaciones que anteriormente ya se ejecutaron
// Por ejemplo al hacer 5! hara todo el proceso, pero al hacer 6! solo hara 6 * cache (cache === 5!)
