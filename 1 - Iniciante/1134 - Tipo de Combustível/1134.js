var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let atual;
let alcool = 0;
let gasolina = 0;
let diesel = 0;

while (atual !== 4) {
  atual = Number(lines.shift());

  switch (atual) {
    case 1:
      alcool++;
      break;

    case 2:
      gasolina++;
      break;

    case 3:
      diesel++;
      break;
  }
}

console.log(`MUITO OBRIGADO`);
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);
