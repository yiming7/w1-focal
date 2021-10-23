/*
node reverse.js hello goodbye
olleh
eybdoog
node reverse.js 1 fish 2 fish
1
hsif
2
hsif
*/

const reverse = function(args){
  for (let i = 2; i < args.length; i++) {
    let output = [];
    for(let j = 0;j<args[i].length;j++){
      output.unshift(args[i][j]);
    }
    console.log(output);
  }
}
//console.log(process.argv);
reverse(process.argv);