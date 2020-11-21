function f() {
  document.getElementById("result").innerText = Number.parseFloat(document.getElementById("m").value, 10) * Number.parseFloat(document.getElementById("a").value, 10);
}
function m() {
  document.getElementById("result").innerText = Number.parseFloat(document.getElementById("f").value, 10) / Number.parseFloat(document.getElementById("a").value, 10);
}
function a() {
  document.getElementById("result").innerText = Number.parseFloat(document.getElementById("f").value, 10) / Number.parseFloat(document.getElementById("m").value, 10);
}

document.getElementById("b-f").addEventListener("click", f, false);
document.getElementById("b-a").addEventListener("click", a, false);
document.getElementById("b-m").addEventListener("click", m, false);
