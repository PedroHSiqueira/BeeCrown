var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numero = +lines[0];
let fracao = 0;
let resposta;

for (let i = 0; i < numero; i++) {
  fracao = 1 / (2 + fracao);
}

resposta = 1 + fracao;

console.log(resposta.toFixed(10));
