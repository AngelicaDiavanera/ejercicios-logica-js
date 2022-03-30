function removerConsonatesDeUnstring(texto) {
  return (texto = texto.replace(/[^aeiouAEIOU]/g, ""));
}
console.log(removerConsonatesDeUnstring("Hola mundo"));
console.log(removerConsonatesDeUnstring("Maria Angelica Diavanera"));
