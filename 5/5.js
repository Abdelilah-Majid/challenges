let data = {
  username: "admin",
  passwd: "admin",
};
let input = {
  username: prompt("enter user name"),
  passwd: prompt("enter password"),
};

function check() {
  if (data.username === input.username && data.passwd === input.passwd) {
    console.log("hello master");
  } else {
    console.log("get the hell are here basterd");
  }
}
check();
