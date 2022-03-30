function removerVocalesDeUnString(vocal) {
  return (vocal = vocal.replace(/[aeiouAEIOU]/g, ""));
}
console.log(removerVocalesDeUnString("Hola mundo"));
console.log(removerVocalesDeUnString("Maria Angelica Diavanera"));
