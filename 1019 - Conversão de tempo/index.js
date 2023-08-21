var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let segundos = +lines[0];
let minutos = Math.floor(segundos / 60);
let hora = Math.floor(minutos / 60);
let resto;

if (segundos < 60) {
  console.log(`0:0:${segundos}`);
} else if (minutos < 60) {
  console.log(`0:${minutos}:${segundos % 60}`);
} else if (minutos > 60) {
  console.log(`${hora}:${minutos % 60}:${segundos % 60}`);
}
