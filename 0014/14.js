let data = [];
let reversed_data = [];
function __input_data(input_data = JSON.parse("[" + prompt("inter numbers as an array") + "]"), input_size = prompt("inter block size")) {
 let index = 0;
 let input_data_size = 0;
 let size_index = 0;
 let num_of_size = Math.ceil(input_data.length / Number.parseFloat(input_size));
 for (let i = 0; i < num_of_size; i++) {
  data[index] = new Array();
  size_index = 0;
  for (let i = 0; i < input_size; i++) {
   data[index][size_index] = input_data[input_data_size];
   input_data_size++;
   size_index++;
   console.log(data, num_of_size);
  }
  index++;
 }
}

function __revers_data() {
 let first_index = 0;
 let secend_index = 0;

 for (i of data) {
  reversed_data[first_index] = new Array();
  let length = i.length;
  for (let j = 0; j < length; j++) {
   console.log("r", reversed_data);
   reversed_data[first_index].push(data[first_index].pop());

   secend_index++;
  }
  first_index++;
 }
}

__input_data();
__revers_data();
alert("here is your reversed numbers: " + reversed_data);
