// FUNCTION IMPLEMENTATION
const assertArraysEqual = function (actual, expected) {
  const green = String.fromCodePoint(0x1F34F);
  const red = String.fromCodePoint(0x1F34E);

  if (actual.length !== expected.length) {
    console.log(`${red}${red}${red}Assertion failed: ${actual} !== ${expected}`);
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`${red}${red}${red}Assertion failed: ${actual} !== ${expected}`);
      return false;
    }
  }
  console.log(`${green}${green}${green}Assertion Passed: ${actual} === ${expected}`);
  return true;
};

const eqArrays = function (input1, input2) {
  if (input1.length !== input2.length) {
    return false;
  }
  for (let i = 0; i < input1.length; i++) {
    if (input1[i] !== input2[i]) {
      return false;
    }
  }
  return true;
};

let output = [];

const flatten = function (input, output) {
  if (!Array.isArray(input)) {
    output.push(input);
  } else {
    for (let item of input) {
      output.push(flatten(item),output);
    }
  }
};
//console.log(Array.isArray([1, 2]));
console.log(flatten([1, [2, 3]], output));  // => [1, 2, 3, 4, 5, 6]
