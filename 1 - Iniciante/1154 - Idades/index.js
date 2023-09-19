var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numeros = lines.map((x) => Number(x));
let soma = 0;
let contador = 0;
let index = 0;

do {
  if (numeros[index] < 0) {
    break;
  }

  soma += numeros[index];
  contador++;
  index++;
} while (true);

console.log((soma / contador).toFixed(2));
