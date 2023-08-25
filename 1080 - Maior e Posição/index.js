var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numeros = lines.map((x) => Number(x));

let posicao = 0;
let maior = 0;

for (let i = 0; i < 100; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
    posicao = i + 1;
  }
}

console.log(maior);
console.log(posicao);
