function __main(arr = JSON.parse("[" + prompt("enter numbers as an array") + "]"), int = Number.parseFloat(prompt("enter the intiger you want to look for it's sum"))) {
 for (i of arr) {
  for (j of arr) {
   if ((i + j === int && arr.indexOf(i) !== arr.lastIndexOf(j)) || (i + j === int && arr.lastIndexOf(i) !== arr.indexOf(j))) {
    console.log(i, j);
    return [true, i, j];
   }
  }
 }
 return false;
}
alert(__main());
