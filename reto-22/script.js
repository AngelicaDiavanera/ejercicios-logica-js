function countUniqueVowel(text) {
  let regexp = new RegExp("/S?[^aeiouAEIOU]g");
  const result = text.replace(regexp, "").length;
  if (result > 1) {
    console.log(result);
  }
}
countUniqueVowel("hiA");
