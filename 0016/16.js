let data_0 = [];
let data_1 = [];
let result = "";

function __main(str_0 = prompt("inter string 1"), str_1 = prompt("inter string 2")) {
 for (i of str_0) {
  data_0.push(i);
 }
 for (i of str_1) {
  data_1.push(i);
 }

 for (i of data_0) {
  for (j of data_1) {
   if (i === j) {
    data_0.splice(data_0.indexOf(i), 1);
   }
  }
 }
 for (i of data_0) {
  result += i;
 }
 return result;
}

alert(__main());
