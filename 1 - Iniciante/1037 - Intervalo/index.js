var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numero = +lines[0];

if (numero < 0 || numero > 100) {
  console.log("Fora de intervalo");
} else if (numero > 0 && numero <= 25) {
  console.log("Intervalo [0,25]");
} else if (numero > 25 && numero <= 50) {
  console.log("Intervalo (25,50]");
} else if (numero > 50 && numero <= 75) {
  console.log("Intervalo (50,75]");
} else if (numero > 75 && numero <= 100) {
  console.log("Intervalo (75,100]");
}
