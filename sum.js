const args = process.argv.slice(2);
console.log(sum(args[0], args[1]));

const sum = function(input1, input2) {
  return Number(input1) + Number(input2);
};