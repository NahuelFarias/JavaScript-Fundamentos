let x = 3,
  y = "3";

console.log("Comparing variables:");

// Comparing the content
console.log(x == y);

// Comparing content and type
console.log(x === y);

let person = {
  name: "Anthony",
};

// Creating a new object
let person2 = {
  name: "Anthony",
};

// Pointing to the same object
let person3 = person;

console.log("\nComparing objects:");

console.log(person === person2);

console.log(person === person3);
