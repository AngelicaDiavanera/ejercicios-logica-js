function organizarListadoDePrecios() {
  const precios = ["3800", "700", "10000", "200"];

  return precios.sort((a, b) => a - b);
}
console.log(organizarListadoDePrecios());
