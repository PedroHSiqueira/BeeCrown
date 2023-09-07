var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numero = parseInt(lines.shift());
let temp = 1;
let soma = 0;
let anterior = 0;

for (let i = 0; i < numero; i++) {
  let atual = parseInt(lines.shift());

  for (let j = 1; j < atual; j++) {
    soma = temp + anterior;
    anterior = temp;
    temp = soma;
  }
  if (atual == 1) {
    console.log(`Fib(${1}) = ${1}`);
  } else {
    console.log(`Fib(${atual}) = ${soma}`);
  }
  soma = 0;
  temp = 1;
  anterior = 0;
}
