// Fråga 1.1 (1p)
// Använd filter för att filtrera numbers och
// skapa en ny array med alla tal som är mindre än 50.
// Den nya arrayen ska sparas i en variabel som heter smallerThan50.

const numbers = [200, 54, 582, 33, 4];

// Din kod här:
const smallerThan50 = numbers.filter((num) => num < 50);

// Fråga 1.2 (2p)
//Använd map på arrayen fullName och skapa en ny array lastNameFirst
// där alla element endast är på format "Efternamn, Förnamn"

const fullName = ["John Doe", "Jane Doe", "John Smith", "Jane Smith"];

// Din kod här:
const lastNameFirst = fullName.map((name) => {
  const [fname, lname] = name.split(" ");
  return `${lname}, ${fname} `;
});

// Test
console.log(smallerThan50); // [200, 54, 33, 4]
console.log(lastNameFirst); // ["Doe, John", "Doe, Jane", "Smith, John", "Smith, Jane"]
