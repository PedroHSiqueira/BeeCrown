var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const vezes = lines.shift();
const numeros = lines.map((x) => Number(x));

for (let i = 0; i < vezes; i++) {
  if (numeros[i] === 0) {
    console.log("NULL");
  } else if (numeros[i] < 0 && numeros[i] % 2 === 0) {
    console.log("EVEN NEGATIVE");
  } else if (numeros[i] > 0 && numeros[i] % 2 === 0) {
    console.log("EVEN POSITIVE");
  } else if (numeros[i] > 0 && numeros[i] % 2 === 1) {
    console.log("ODD POSITIVE");
  } else {
    console.log("ODD NEGATIVE");
  }
}
