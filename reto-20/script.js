function invertirUnNumero(numero) {
  const array = numero.split("");
  array.reverse();
  console.log(array.join(""));
}
invertirUnNumero("987654321");
