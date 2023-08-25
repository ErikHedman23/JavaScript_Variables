console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let lastName;
var age;
// Exercise 2
const firstName = "Erik";
lastName = "Hedman";
age = 23;
// Exercise 3
let language = "JavaScript";
let createdYear = 1995;
let isCaseSensitive = true;

// Exercise 4
let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
inStock = false;
let selectedSize = "M";
// Exercise 5
let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = 722;
let bookMark = 456;
let hasRead = true;

console.log(
  `Hello, my name is ${firstName} ${lastName}!\nI am learning ${language} that was created in the year ${createdYear}.\nI like to read the book ${title}, by ${author}, and it has ${pageCount} pages! `
);
console.log(
  `Is JavaScript case sensitive? The answer is ${isCaseSensitive}.\nThe book mentioned above book marked at page ${bookMark} is priced at ${price}.`
);
console.log(
  `It has a stock level of ${stock}, and is it on sale? The answer is: ${isOnSale}!\nIs it ion stock?  ${inStock}: it is not!  And, I just realized this was probably referring to a shirt size...`
);
console.log(
  `Soooo... the size of the shirt that is being sold for ${price} that has a logo fo the book ${title} on is is a size ${selectedSize}, and believe it or not, it is ${hasRead} that I have read this book!`
);
