function contarPalabrasDeString(string) {
  const palabra = string.split(" ");
  const resultado = palabra.length;
  return resultado;
}
console.log(contarPalabrasDeString("Hola mundo"));
console.log(contarPalabrasDeString("Maria Angelica Diavanera"));
