var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const vezes = lines.shift();

let coelho = 0;
let sapo = 0;
let rato = 0;

for (let i = 0; i < vezes; i++) {
  if (lines[i].includes("C")) {
    let separar = lines[i].split(" ");
    coelho += +separar[0];
  } else if (lines[i].includes("R")) {
    let separar = lines[i].split(" ");
    rato += +separar[0];
  } else {
    let separar = lines[i].split(" ");
    sapo += +separar[0];
  }
}

let total = coelho + sapo + rato;

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelho}`);
console.log(`Total de ratos: ${rato}`);
console.log(`Total de sapos: ${sapo}`);
console.log(`Percentual de coelhos: ${((coelho / total) * 100).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((rato / total) * 100).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((sapo / total) * 100).toFixed(2)} %`);
