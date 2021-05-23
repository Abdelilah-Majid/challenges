let data = {
 0: ["12 * 12?", "144"],
 1: ["What is reddit?", "website with cats"],
 2: ["Translate: hola", "hello"],
};
function __main(last_num, re) {
 random = Math.round(Math.random() * 2);
 random_num = "";
 function g(last) {
  random = Math.round(Math.random() * 2);
  if (last === random) {
   g(random);
  } else {
   random_num = random;
  }
 } 
 g(last_num);
 if (prompt(data[random_num][0]) === data[random_num][1]) {
  __main(random_num);
 } else {
  alert(data[random_num][1]);
 }
}
__main();
