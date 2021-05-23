let data = [];
let input = prompt("inter phrase");
let result = [];
let stop = false;
let duplicate = {};

function cownt_duplicate() {
 for (i of data) {
  if (duplicate[i]) {
   duplicate[i] += 1;
  } else {
   duplicate[i] = 1;
  }
 }
}
function __main() {
 let stop_loop = false;
 for (let a = 0; a < input.length; a += 0.0001) {
  let str = "";
  let result_game_over = false;
  if (!stop_loop) {
   for (i of input) {
    data.push(i);
   }
   cownt_duplicate();
   stop_loop = true;
  }
  x: for (let b = 0; b < data.length; b += 0.1) {
   let duplicate_count = {};
   let duplicate_exeded = false;
   let random = Math.round(Math.random() * (data.length - 1));
   let game_over = false;

   for (i of str) {
    if (i === data[random]) {
     if (duplicate_count[i] === duplicate[i]) {
     } else if (duplicate_count[i]) {
      duplicate_count[i] += 1;
      // console.log("true", i);
     } else {
      duplicate_count[i] = 1;
     }
     if (duplicate_count[i] === duplicate[i]) {
      duplicate_exeded = true;
     }
    }
    if (i === data[random] && duplicate_exeded) {
     game_over = true;
     continue x;
    }
    // console.log("duplicate_exeded", duplicate_exeded, "duplicate_cownt", duplicate_count);
   }
   if (!game_over) {
    str += data[random];
   }
  }
  for (i of result) {
   if (str === i) {
    result_game_over = true;
   }
  }
  if (!result_game_over && str.length === data.length) {
   result.push(str);
  }
 }
}

__main();
console.log("result", result, "data", data, "duplicate", duplicate);
alert("result: " + result.length + " values: " + result);
// for (i of result) {
//  for (j of result) {
//   if (i === j && result.indexOf(i) !== result.indexOf(j)) {
//    console.log("ERROR!!!!!!!!!!!!!!!!!!!!!!!");
//   } else {
//    console.log("GOOD SIGNATURE");
//   }
//  }
// }
