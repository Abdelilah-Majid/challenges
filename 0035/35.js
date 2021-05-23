let result = ``;
let arr = [];
function __main(number = Number.parseInt(prompt("enter number"))) {
 let lenght = 1;
 let lenght1 = 1;
 for (let i = number; i >= 1; i--) {
  result += i;
  result += " ";
  lenght1--;
  // console.log("length,length1", lenght, lenght1);
  if (lenght1 <= 0) {
   result += "\n";
   lenght++;
   lenght1 = lenght;
  }
 }
 alert(result);
}
__main();
