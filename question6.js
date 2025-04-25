// Fråga 6. (2p) Shoppingcart
// Slutför funktionen calculateTotalPrice som tar emot en array med
// produkter som input och returnerar det totala priset

const products = [
  { name: "Shirt", brand: "Nike", model: "Dri-Fit", price: 45 },
  { name: "Jeans", brand: "Levis", model: "501", price: 95 },
];

const products2 = [
  { name: "Jacket", brand: "North_Face", model: "Puffer", price: 120 },
  { name: "Sneakers", brand: "Adidas", model: "Ultraboost", price: 180 },
  { name: "Hat", brand: "New_Era", model: "Snapback", price: 35 },
];

function calculateTotalPrice(shoppingCart) {
  // Din kod här:
  const totalPrice = shoppingCart
    .map((item) => item.price)
    .reduce((arr, curr) => {
      return arr + curr;
    }, 0);
  return totalPrice;
}

console.log(calculateTotalPrice(products)); // Ska logga 140
console.log(calculateTotalPrice(products2)); // Ska logga 335
