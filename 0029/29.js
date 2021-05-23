function __main(str_0 = prompt("enter string")) {
 let data_0 = [];
 let data_1 = [];
 for (i of str_0) {
  data_0.push(i);
 }
 for (let i = str_0.length - 1; i >= 0; i--) {
  data_1.push(str_0.charAt(i));
 }
 console.log(data_0, data_1);
 for (i of data_0) {
  if (i !== data_1[data_0.indexOf(i)]) {
   return false;
  } else {
   return true;
  }
 }
}

alert(__main());
