let data = [];
let data_cownt = [];
result = "";

function __find_heighst_num(input = prompt("enter a number")) {
 for (i of input) {
  data.push(i);
 }
 for (i of data) {
  data_cownt[data.indexOf(i)] = new Object();
  data_cownt[data.indexOf(i)][i] = 0;
  for (j of data) {
   if (i > j) {
    data_cownt[data.indexOf(i)][i] += 1;
   }
  }
 }

 x: for (i of data_cownt) {
  for (j of data_cownt) {
   for (a in i) {
    for (b in j) {
     if (Number.parseInt(a) > Number.parseInt(b)) {
      data_cownt.splice(data_cownt.indexOf(i), 1);
      data_cownt.splice(data_cownt.indexOf(j), 0, i);
      console.log("a", a, "b", b, "dj", data_cownt.indexOf(j), "data_c", data_cownt, "data", data);
      continue x;
     }
    }
   }
  }
 }

 for (i of data_cownt) {
  for (j of data) {
   for (a in i) {
    if (a === j) {
     result += a;
     console.log(result);
    }
   }
  }
 }

 return result;
}
alert(__find_heighst_num());
