const diceRoller = function(num){
  let output = [];  
  for(let i = 0; i<num; i++){
    let dice = Math.floor(Math.random() * 6 + 1);
    output.push(dice);
  }
  return output.join(',');
};

let num = process.argv[2];
console.log(`Rolled ${num} dice: ${diceRoller(num)}`);