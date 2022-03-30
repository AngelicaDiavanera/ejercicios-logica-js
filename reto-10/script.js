function calcularHipotenusaDeUnTriangulo(lado1, lado2) {
  if (lado1 <= 0 || lado2 <= 0) {
    throw "El lado del triangulo no puede ser menor o igual a 0";
  }
  return Math.pow(lado1, 2) + Math.pow(lado2, 2);
}
console.log(calcularHipotenusaDeUnTriangulo(5, 1));
