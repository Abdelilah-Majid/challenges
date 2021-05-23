let data = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function get_day(day, month, year) {
 let date_str = "";
 date_str = month + " " + day + "," + year;
 alert(data[new Date(date_str).getDay()]);
}

get_day(prompt("inter day"), prompt("inter month"), prompt("inter year"));
