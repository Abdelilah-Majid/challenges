function __main(height = Number.parseInt(prompt("inter height"))) {
 let length = 1;
 let result = "";
 for (let i = 0; i < height; i++) {
  for (let i = 0; i < length; i++) {
   result += "*";
  }
  result += "\n";
  length *= 2;
 }
 return result;
}

alert(__main());
