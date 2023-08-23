var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const vezes = lines.shift();
let carrinhos = 0;
let bonecas = 0;
let i = 0;

for (let i = 0; i < vezes; i++) {
  if (lines[i].endsWith("F")) {
    bonecas++;
  } else if (lines[i].endsWith("M")) {
    carrinhos++;
  }
}

console.log(`${carrinhos} carrinhos`);
console.log(`${bonecas} bonecas`);
