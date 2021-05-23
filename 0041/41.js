function __main(data = prompt("inter phrase")) {
 let result = __render(data);
 return result;
}

function __render(data) {
 let result = ``;
 let n = data.length;
 let switcher = 70 - n >= 5 ? 70 - n : 5;
 let minus = 0;
 console.log(switcher);
 for (let i = 0; i < 70; i++) {
  result += "*";
  if (i === 69) {
   result += "\n";
  }
 }

 for (let i = 0; i < switcher; i++) {
  if (i === 0) {
   result += "*";
  }
  if (i === Math.floor(switcher / 2)) {
   for (let j = 0; j < data.length; j++) {
    if (j - minus === 66) {
     output = [data.slice(0, 64 + minus), "  *\n*  ", data.slice(66 + minus)].join("");
     data = output;
     minus = j;
    }
   }
   result += data;
  }
  result += " ";
  if (i === switcher - 3) {
   if (minus > 0) {
    for (let j = 0; j < 70 - (data.length - minus); j++) {
     result += " ";
    }
   }
   result += "*";
  }
  if (i === switcher - 1) {
   result += "\n";
  }
 }

 for (let i = 0; i < 70; i++) {
  result += "*";
  if (i === 69) {
   result += "\n";
  }
 }

 return result;
}
console.log(__main());
