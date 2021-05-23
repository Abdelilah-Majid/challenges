let data = {};

function __main() {
 fill_data();
 toggle();
}
function fill_data() {
 for (let i = 1; i <= 1000; i++) {
  data[i] = false;
 }
}
function toggle() {
 multiplayer = 1;
 function addmultiplayer() {
  multiplayer++;
 }
 for (let i = 1; i <= 1000; i += multiplayer) {
  data[i] = data[i] === false ? true : false;
 }
 addmultiplayer();

 for (let i = multiplayer; i <= 1000; i++) {
  for (let j = multiplayer; j <= 1000; j *= 2) {
   data[j] = data[j] === false ? true : false;
   console.log(multiplayer);
   if (multiplayer <= 1001) {
    if (j * 2 > 1000) {
     addmultiplayer();
     console.log("done");
    }
   }
  }
 }
}
__main();
console.log(data);
