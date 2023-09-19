var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numero = +lines[0];
let soma = 0;

for (let i = numero - 1; i >= 1; i--) {
  numero *= i;
}

console.log(numero);
