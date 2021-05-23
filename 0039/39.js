function __calc(n) {
 if (n % 3 === 0) {
  if (n % 5 === 0) {
   return "FizzBuzz";
  }
  return "Fizz";
 } else if (n % 5 === 0) {
  return "Buzz";
 } else {
  return n;
 }
}

function __main(n = prompt("inter n the largest number")) {
 let result = ``;
 for (let i = 1; i <= n; i++) {
  result += __calc(i) + "\n";
 }
 return result;
}
let result = __main();
console.log(result);
alert(result);
