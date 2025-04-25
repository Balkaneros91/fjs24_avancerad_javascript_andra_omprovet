// Fråga 4 (2p) Spread med arrayer
// Skapa en funktion 'combineArrays' som tar emot två arrayer som argument
// och använder spread operatorn för att kombinera dem till en enda array.
// Returnera den nya arrayen

function combineArrays(arr1, arr2) {
  // Din kod här.
  const arr = [...arr1, ...arr2];
  return arr;
}

//Test
console.log(combineArrays([1, 2, 3], [4, 5, 6])); // Ska logga [1, 2, 3, 4, 5, 6]
