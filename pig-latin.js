const pigLatin = function(args){
  let output = [];
  for (i=2;i<args.length;i++){
    let newWord = [];
    newWord = args[i].slice(1)+args[i][0]+"ay";
    output.push(newWord);
  }
  console.log(output.join(" "));
}

pigLatin(process.argv);

/*
node pig-latin.js pig latin
igpay atinlay
node pig-latin.js this is all just gibberish
histay siay llaay ustjay ibberishgay
*/