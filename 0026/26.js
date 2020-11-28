let result = ["", ""];

function __main(input = prompt("enter string")) {
 let last = "";
 for (i of input) {
  if (last === i) {
   result[1] += i;
  } else {
   result[0] += i;
  }
  last = i;
 }
 return result;
}

alert(__main());
