let encode_data = {
  a: null,
  z: null,
  e: null,
  r: null,
  t: null,
  y: null,
  u: null,
  i: null,
  o: null,
  p: null,
  q: null,
  s: null,
  d: null,
  f: null,
  g: null,
  h: null,
  j: null,
  k: null,
  l: null,
  m: null,
  w: null,
  x: null,
  c: null,
  v: null,
  b: null,
  n: null,
};
let e_result = "";
function set_encode(data, min, max) {
  if (!localStorage.getItem("m")) {
    for (i in data) {
      data[i] = Math.round(Math.random() * (max - min) + min);
      function secure() {
        for (j in data) {
          if (data[i] === data[j] && j !== i) {
            data[i] = Math.round(Math.random() * (max - min) + min);
            secure();
          }
        }
      }
      secure();
      console.log(data[i]);
    }
    for (i in data) {
      localStorage.setItem(i, data[i]);
    }
    console.log(localStorage.getItem("a"));
  }
}
set_encode(encode_data, 100, 999);
function new_encode(enc_da, min, max) {
  localStorage.clear();
  set_encode(enc_da, min, max);
}
function encode_text(text) {
  e_result = "";
  for (i of text) {
    if (localStorage.getItem(i)) {
      e_result += localStorage.getItem(i);
      console.log(e_result);
    }
  }
}
function decode_text(e_result) {
  let j = 0;
  let key = "";
  d_result = "";
  for (i of e_result) {
    key += i;
    j++;
    if (j === 3) {
      for (h in encode_data) {
        if (key === localStorage.getItem(h)) {
          d_result += h;
          console.log(d_result);
        }
      }

      j = 0;
      key = "";
    }
  }
}
