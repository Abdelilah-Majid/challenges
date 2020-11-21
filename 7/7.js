let data = {
 a: ".-",
 z: "--..",
 e: ".",
 r: ".-.",
 t: "-",
 y: "-.--",
 u: "..-",
 i: "..",
 o: "---",
 p: ".--.",
 q: "--.-",
 s: "...",
 d: "-..",
 f: "..-.",
 g: "--.",
 h: "....",
 j: ".---",
 k: "-.-",
 l: ".-..",
 m: "--",
 w: ".--",
 x: "-..-",
 c: "-.-.",
 v: "...-",
 b: "-...",
 n: "-.",
};
let resulte = "";
let morse_phrase = ".... . .-.. .-.. --- / -.. .- .. .-.. -.-- / .--. .-. --- --. .-. .- -- -- . .-. / --. --- --- -.. / .-.. ..- -.-. -.- / --- -. / - .... . / -.-. .... .- .-.. .-.. . -. --. . ... / - --- -.. .- -.--";
function decode(m_phrase = prompt("enter morse code you want to decode")) {
 resulte = "";
 let key = "";
 for (i of m_phrase) {
  if (i === "/") {
   resulte += " ";
  } else if (i === " ") {
   decode_key();
   key = "";
  } else {
   key += i;
  }
 }
 decode_key();
 function decode_key() {
  for (j in data) {
   if (key === data[j]) {
    resulte += j;
   }
  }
 }
 console.log(resulte);
}
decode(morse_phrase);
