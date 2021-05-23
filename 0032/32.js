let data = [one, two, three, four, five];

function __main(input = Number.parseInt(prompt("enter your bet"))) {
 alert(data[Math.round(Math.random() * 4)](input));
}
function one(input) {
 console.log("one");
 return input * 2;
}
function two(input) {
 console.log("two");
 return input * 3;
}
function three(input) {
 console.log("three");
 return input * 5 + 1000;
}
function four(input) {
 console.log("four");
 return input * 10;
}
function five(input) {
 console.log("five");
 return input * 2 + 1000000;
}
__main();
