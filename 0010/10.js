let data = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let input = prompt("enter phone number to validate");

function validate_phone_number() {
 let game_over = false;
 let validate = false;
 if (validate_0()) {
  validate = true;
 } else if (validate_1()) {
  validate = true;
 } else if (validate_2()) {
  validate = true;
 } else if (validate_3()) {
  validate = true;
 } else if (validate_4()) {
  validate = true;
 } else if (validate_5()) {
  validate = true;
 }
 if (!validate_symbole()) {
  game_over = true;
 }
 if (!game_over && validate) {
  alert("valide");
 } else {
  alert("not valide");
 }
 console.log("v", validate, "g", game_over);
}
function validate_symbole() {
 for (i of input) {
  if (i === ":" || i === "/") {
   console.log("validate_symbole: error ;");
   return false;
  }
 }
 return true;
}
function validate_0() {
 let first_num_nums = 0;
 let index_is_more_than_3 = false;
 let index_is_less_than_7 = true;
 let dash = 0;
 let first_dash_game_over = false;
 let index = -1;

 for (i of input) {
  index += 1;
  if (index === 4) {
   index_is_more_than_3 = true;
  }
  if (index === 7) {
   index_is_less_than_7 = false;
  }
  for (j in data) {
   if (i === j) {
    first_num_nums += 1;
   }
  }
  if ((first_num_nums === 3 && i === "-") || (first_num_nums === 6 && i === "-")) {
   dash += 1;
  }
  if ((index !== 3 && !index_is_more_than_3 && i === "-") || (index !== 7 && !index_is_less_than_7 && i === "-") || (index !== -1 && i === ".") || (index !== -1 && i === "(") || (index !== -1 && i === ")") || (index !== -1 && i === " ")) {
   console.log("validate_0: error at index:", index);
   first_dash_game_over = true;
  }
 }

 if ((first_num_nums = 10)) {
  if (dash === 2 && !first_dash_game_over) {
   return true;
  }
 }
 console.log(first_dash_game_over);
}

function validate_1() {
 let first_num_nums = 0;
 let index_is_more_than_3 = false;
 let index_is_less_than_7 = true;
 let first_dot_game_over = false;
 let dot = 0;
 let index = -1;
 for (i of input) {
  index += 1;
  for (j in data) {
   if (i === j) {
    first_num_nums += 1;
   }
  }
  if (index === 4) {
   index_is_more_than_3 = true;
  }
  if (index === 7) {
   index_is_less_than_7 = false;
  }
  if ((first_num_nums === 3 && i === ".") || (first_num_nums === 6 && i === ".")) {
   dot += 1;
  }
  if ((index !== 3 && !index_is_more_than_3 && i === ".") || (index !== 7 && !index_is_less_than_7 && i === ".") || (index !== -1 && i === " ") || (index !== -1 && i === "-") || (index !== -1 && i === "(") || (index !== -1 && i === ")")) {
   console.log("validate_1: error at index:", index);
   first_dot_game_over = true;
  }
 }
 if ((first_num_nums = 10)) {
  if (dot === 2 && !first_dot_game_over) {
   return true;
  }
 }

 console.log(first_dot_game_over);
}

function validate_2() {
 let first_num_nums = 0;
 let index_is_less_than_4 = true;
 let index_is_more_than_1 = false;
 let first_bow_game_over = false;
 let first_dash_game_over = false;
 let bow = 0;
 let dash = 0;
 let index = -1;

 for (i of input) {
  index += 1;

  for (j in data) {
   if (i === j) {
    first_num_nums += 1;
   }
  }
  if (index === 1) {
   index_is_more_than_1 = true;
  }
  if (index === 4) {
   index_is_less_than_4 = false;
  }
  if ((index === 0 && i === "(") || (index === 4 && i === ")")) {
   bow += 1;
  }
  if ((index !== 0 && i === "(") || (index !== 4 && i === ")") || (index !== -1 && i === " ") || (index !== -1 && i === ".")) {
   console.log("validate_2: error at index:", index);
   first_bow_game_over = true;
  }
  if (index === 8 && i === "-") {
   dash += 1;
  }
  if ((index !== 8 && i === "-") || (index !== -1 && i === ".") || (index !== -1 && i === " ")) {
   console.log("validate_2: error at index:", index);
   first_dash_game_over = true;
  }
  if (i === " ") {
   first_dash_game_over = true;
  }
 }
 console.log("1", index_is_more_than_1, "4", index_is_less_than_4);
 if ((first_num_nums = 10)) {
  if (bow === 2 && dash === 1 && !first_bow_game_over && !first_dash_game_over) {
   return true;
  }
 }
}
function validate_3() {
 let first_num_nums = 0;
 let index_is_less_than_4 = true;
 let index_is_more_than_1 = false;
 let first_bow_game_over = false;
 let first_dash_game_over = false;
 let bow = 0;
 let dash = 0;
 let index = -1;
 let space = 0;

 for (i of input) {
  index += 1;

  for (j in data) {
   if (i === j) {
    first_num_nums += 1;
   }
  }
  if (index === 1) {
   index_is_more_than_1 = true;
  }
  if (index === 4) {
   index_is_less_than_4 = false;
  }
  if ((index === 0 && i === "(") || (index === 4 && i === ")")) {
   bow += 1;
  }
  if ((index !== 0 && i === "(") || (index !== 4 && i === ")") || (index !== -1 && i === ".")) {
   console.log("error at index:", index);
   first_bow_game_over = true;
  }
  if (index === 9 && i === "-") {
   dash += 1;
  }
  if ((index !== 9 && i === "-") || (index !== -1 && i === ".")) {
   console.log("validate_3: error at index:", index);
   first_dash_game_over = true;
  }
  if (index === 5 && i === " ") {
   space += 1;
  }
  if ((index !== 5 && i === " ") || (index !== -1 && i === ".")) {
   console.log("validate_3: error at index:", index);
   first_dash_game_over = true;
  }
 }
 console.log("1", index_is_more_than_1, "4", index_is_less_than_4);
 if ((first_num_nums = 10)) {
  if (bow === 2 && dash === 1 && !first_bow_game_over && !first_dash_game_over) {
   return true;
  }
 }
}
function validate_4() {
 let first_num_nums = 0;
 let index = -1;
 let first_dash_game_over = false;
 let dash = 0;

 for (i of input) {
  index += 1;

  for (j in data) {
   if (i === j) {
    first_num_nums += 1;
   }
  }

  if (index === 3 && i === "-") {
   dash += 1;
  }
  if ((index !== 3 && i === "-") || (index !== -1 && i === ".") || (index !== -1 && i === " ") || (index !== -1 && i === "(") || (index !== -1 && i === ")")) {
   console.log("validate_4: error at index:", index);
   first_dash_game_over = true;
  }
 }
 if ((first_num_nums = 7)) {
  if (dash === 1 && !first_dash_game_over) {
   return true;
  }
 }
 console.log(first_num_nums, dash);
}

function validate_5() {
 let first_num_nums = 0;
 let game_over = false;
 for (i of input) {
  for (j in data) {
   if (i === j) {
    first_num_nums += 1;
   }
  }

  if (i === "-" || i === "." || i === " " || i === ":" || i === "/" || i === "(" || i === ")") {
   console.log("validate_5: error;");
   game_over = true;
  }
 }

 if (first_num_nums === 10 && !game_over) {
  return true;
 }
}
validate_phone_number();
