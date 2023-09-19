var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numero = +lines[0];
let resposta = "";

for (let i = 1; i <= numero - 1; i++) {
  resposta = resposta + "Ho" + " ";
}

console.log(resposta + "Ho!");
