function organizarListadoDePreciosAsc(precios) {
  return precios.sort((a, b) => a - b);
}
console.log(organizarListadoDePreciosAsc(["3800", "700", "10000", "200"]));
