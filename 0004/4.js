let data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "w", "x", "c", "v", "b", "n"];
let results = [];

function generate_random_passwd() {
  let passwd_num = prompt("enter how many passwords you wan to genarate");
  let passwd_lenght = prompt("enter the lenght of the passwords you wan to genarate");
  let passwd = "";

  for (let i = 0; i < passwd_num; i++) {
    for (let j = 0; j < passwd_lenght; j++) {
      random_num = Math.round(Math.random() * 35);
      passwd += data[random_num];
      // console.log(passwd);
    }
    results.push(passwd);
    passwd = "";
  }
}
generate_random_passwd();
console.log(results);
