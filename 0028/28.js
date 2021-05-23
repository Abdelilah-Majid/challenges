let data = [];

for (let i = 0; i < 1000000; i++) {
 data.push(i);
}
data.push(10000);

function __check_duplicates() {
 let start = performance.now();
 let end = null;
 for (i of data) {
  if (data.indexOf(i) !== data.lastIndexOf(i)) {
   end = performance.now();
   console.log(end - start);
   return i;
  }
 }
}
alert(__check_duplicates());
