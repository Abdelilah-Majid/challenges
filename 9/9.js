let data = [];
function main() {
 data = [];
 let result = "";
 let input = prompt("inter numbers separated with spaces");
 let key = "";
 let num = null;

 function parse() {
  let done = false;
  if (data.length === 0) {
   data.push(num);
  } else if (data.length > 0) {
   for (let i = 0; i < data.length; i++) {
    if (num <= data[i]) {
     data.splice(i, 0, num);
     data.splice(i + 1, 0, ",");
     done = true;
     break;
    }
   }
   if (!done) {
    data.push(",");
    data.push(num);
   }
  }
  console.log("num", num);
 }
 for (let i = 0; i < input.length; i++) {
  char = input.charAt(i);
  console.log("error");
  if (char === " ") {
   num = Number.parseInt(key);
   // data.push(",");
   parse();
   key = "";
   num = null;
  } else {
   key += char;
  }
 }
 num = Number.parseInt(key);
 // data.push(",");

 parse();
 for (let i = 0; i < data.length; i++) {
  result += data[i];
 }
 console.log(data);
 alert(result);
}
main();
