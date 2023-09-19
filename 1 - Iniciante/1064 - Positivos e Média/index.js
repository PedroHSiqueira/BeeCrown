var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numero = lines.map((x) => Number(x));

let positivos = 0;
let soma = 0;
let media = 0;

for (let i = 0; i < 6; i++) {
  if (numero[i] > 0) {
    positivos += 1;
    soma += numero[i];
    media = soma / positivos;
  }
}

console.log(`${positivos} valores positivos`);
console.log(media.toFixed(1));
