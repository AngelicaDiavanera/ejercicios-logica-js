function contarNumeroDeVocalesDeUnString(texto) {
  return texto.replace(/[^aeiouAEIOU]/g, "").length;
}
console.log(contarNumeroDeVocalesDeUnString("Hola me llamo Apolo"));
