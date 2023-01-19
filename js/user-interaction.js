"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
let enteredName = "";

while (enteredName === "") {
  enteredName = prompt("What is your name?");
}

// TODO: Show an alert message that welcomes the user based on their input.
alert(`Nice to meet you ${enteredName}`);
// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
const response = confirm(`Do you like pizza ${enteredName}? 🍕`);

if (response) {
  alert("I like pizza too!");
} else {
  alert("Really I thought everyone liked pizza...");
}
