let result = [];

function __main(arr_0 = JSON.parse("[" + prompt("inter array_1") + "]"), arr_1 = JSON.parse("[" + prompt("inter array_2") + "]")) {
 for (i of arr_0) {
  result.push(i);
 }
 for (i of arr_0) {
  for (j of arr_1) {
   if (i !== j && !result.includes(j)) {
    result.push(j);
   }
  }
 }
 return result;
}
alert(__main());
