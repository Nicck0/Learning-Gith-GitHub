let person = {
  name: "Nicck0",
  age: 20,
  isStudent: true
};

console.log(person.name);      // Prints: Nicck0
console.log(person["age"]);    // Prints: 20

// Add a new property
person.hobby = "coding";
console.log(person.hobby);     // Prints: coding