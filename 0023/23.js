let results = [];

function __main(arr_0 = JSON.parse("[" + prompt("inter the array") + "]")) {
 results.push(new Array());
 results.push(new Array());

 for (let i = 0; i < Math.ceil(arr_0.length / 2); i++) {
  results[0].push(arr_0.pop());
 }
 for (i of arr_0) {
  results[1].push(i);
 }
 console.log("arr_0", results[0], "arr_1", results[1]);
}
__main();
