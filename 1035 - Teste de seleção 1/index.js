var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const [A, B, C, D] = lines[0].split(" ");

let somaCD = +C + +D;
let somaAB = +A + +B;

if (B > C && D > A && somaCD > somaAB && C > 0 && D > 0 && A % 2 == 0) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
