var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const vezes = +lines.shift();
let resposta = "";

for (let i = 0; i < vezes; i++) {
  resposta += "a";
}

console.log(`Feliz nat${resposta}l!`);
