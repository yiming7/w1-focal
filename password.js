/*
Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
*/

const obfuscate = function(args){
  let result = "";
  for(let letter of args){
    if(letter === "a"){
      result += "4";
    }else if(letter ==="e"){
      result += "3";
    }else if(letter ==="o"){
      result += "0";
    }else if(letter ==="l"){
      result += "1";
    }else{
      result += letter;
    }
  }
  return result;
}

console.log(obfuscate(process.argv[2]));