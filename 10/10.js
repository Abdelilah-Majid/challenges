let data = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let input = prompt("enter phone number to validate");

function validate_phone_number() {
 if (validate_0()) {
  alert("validate");
 } else if (validate_1()) {
  alert("validate");
 }
}

function validate_0() {
 let first_num_nums = 0;
 let index_is_more_than_3 = false;
 let index_is_less_than_3 = true;
 let dash = 0;
 let first_dash_game_over = false;
 let index = -1;

 for (i of input) {
  index += 1;
  if (index === 4) {
   index_is_more_than_3 = true;
  }
  if (index === 6) {
   index_is_less_than_3 = false;
  }
  for (j in data) {
   if (i === j) {
    first_num_nums += 1;
   }
  }
  if ((first_num_nums === 3 && i === "-") || (first_num_nums === 6 && i === "-")) {
   dash += 1;
  }
  if ((index !== 3 && !index_is_more_than_3 && i === "-") || (index !== 7 && !index_is_less_than_3 && i === "-")) {
   console.log("error at index:", index);
   first_dash_game_over = true;
  }
 }

 if (first_num_nums <= 10 && first_num_nums >= 7) {
  if (first_num_nums === 10 && dash === 2 && !first_dash_game_over) {
   return true;
  }
 }
 console.log(first_dash_game_over);
}

function validate_1() {
 let first_num_nums = 0;
 let index_is_more_than_3 = false;
 let index_is_less_than_3 = true;
 let first_dot_game_over = false;
 let dot = 0;
 let index = -1;
 for (i of input) {
  index += 1;
  if (index === 4) {
   index_is_more_than_3 = true;
  }
  if (index === 6) {
   index_is_less_than_3 = false;
  }
  for (j in data) {
   if (i === j) {
    first_num_nums += 1;
   }
  }
  if ((first_num_nums === 3 && i === ".") || (first_num_nums === 6 && i === ".")) {
   dot += 1;
  }
  if ((index !== 3 && !index_is_more_than_3 && i === ".") || (index !== 7 && !index_is_less_than_3 && i === ".")) {
   console.log("error at index:", index);
   first_dot_game_over = true;
  }
 }
 if (first_num_nums <= 10 && first_num_nums >= 7) {
  if (first_num_nums === 10 && dot === 2 && !first_dot_game_over) {
   return true;
  }
 }

 console.log(first_dot_game_over);
}

function validate_2() {
 let first_num_nums = 0;
 let index_is_more_than_3 = false;
 let index_is_less_than_3 = true;
 let first_bow_game_over = false;
 let first_dash_game_over = false;
 let dot = 0;
 let index = -1;
}

validate_phone_number();
