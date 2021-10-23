// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const green = String.fromCodePoint(0x1F34F);
  const red = String.fromCodePoint(0x1F34E);
  if (actual !== expected) {
    console.log(`${red}${red}${red}Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`${green}${green}${green}Assertion Passed: ${actual} === ${expected}`);
  }
};

/* TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/

//return everything except for the first item (head) of the provided array
const tail = function(input) {
  if (Array.isArray(input)) {
    if (input.length > 1) {
      return input.slice(1);
    } else {
      return [];
    }
  } else {
    return undefined;  //if this is not an array
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail(words));