let data = {};
let data_1 = [];
function __main(nums = JSON.parse("[" + prompt("enter numbers as an array") + "]")) {
 for (i of nums) {
  data[i] = 0;
  data_1.push(i);
  for (j of nums) {
   if (i > j) {
    data[i]++;
   }
  }
 }
 let befor_bigger = null;
 let bigger = null;
 for (i in data) {
  befor_bigger = bigger;
  for (j in data) {
   if (data[i] > data[j]) {
    bigger = i;
   }
  }
 }
 let duplicate = 0;
 for (i of data_1) {
  console.log(i, bigger);
  if (Number.parseFloat(bigger) === i) {
   duplicate++;
  }
 }
 if (duplicate > 1) {
  alert(sum_sqrt(bigger, bigger));
 } else {
  alert(sum_sqrt(bigger, befor_bigger));
 }
 console.log(bigger, befor_bigger, duplicate);
}
function sum_sqrt(num0, num1) {
 console.log("sum_sqrt", num0, num1);
 return Math.sqrt(num0) + Math.sqrt(num1);
}
__main();
