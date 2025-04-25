// Fråga 5. (3p) String-arrays
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// Använd indexOf eller includes

function filterWordsWithLetterA(words) {
  //Din kod här
  // return words.filter((word) => word.includes("a"));   // INCLUDES
  // OR
  return words.filter((word) => word.indexOf("a") >= 0); // INDEXof
}

console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]
