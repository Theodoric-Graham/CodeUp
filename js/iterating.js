(function () {
  "use strict";

  // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
  const names = ["Theo", "Paige", "Cody", "Cali"];

  // TODO: Create a log statement that will log the number of elements in the names array.
  console.log(names.length);

  // TODO: Create log statements that will print each of the names array elements individually.
  for (let i = 0; i < names.length; i++) {
    console.log(`The name at index ${i} is ${names[i]}`);
  }

  names.forEach((name, i) => {
    console.log(`The name at index ${i} is ${name}`);
  });
})();
