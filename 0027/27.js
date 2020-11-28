let resulte = { "Enter Year": null, Century: null, "Leap Year": null };

function __main(year = prompt("enter year")) {
 let data = [],
  century = "",
  century_1 = "";
 resulte["Enter Year"] = year;
 for (i of year) {
  data.push(i);
 }
 if (data.length >= 3) {
  for (let i = 0; i < data.length - 2; i++) {
   century += data[i];
  }
  century += "00";
 } else {
  return "year is not bigger than 100";
 }
 century = Number.parseInt(century);
 console.log(century);
 if (Number.parseInt(year) > century) {
  century += 100;
 }
 console.log(century);

 century = century.toString();
 for (let i = 0; i < century.length - 2; i++) {
  century_1 += century.charAt(i);
 }
 resulte.Century = century_1 + "th";
 resulte["Leap Year"] = __is_leap_year(Number.parseInt(year));
 return resulte;
}
console.log(__main());
function __is_leap_year(year) {
 console.log("done");
 return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
