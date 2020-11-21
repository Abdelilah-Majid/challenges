let data = {
  name: null,
  age: null,
  username: null,
};
j = 0;

for (i in data) {
  data[i] = prompt(i);
  sessionStorage.setItem(Object.keys(data)[j], data[i]);
  j++;
}
console.log("name:", sessionStorage.getItem("name"), "age:", sessionStorage.getItem("age"), "username:", sessionStorage.getItem("username"));
