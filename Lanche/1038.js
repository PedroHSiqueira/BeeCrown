var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const item = lines[0].split(" ");
const numero = item.map((x) => Number(x));

const codigo = numero[0];

const quantidade = numero[1];

let valor = 0;

switch (codigo) {
  case 1:
    valor = 4;
    break;

  case 2:
    valor = 4.50;
    break;
  
    case 3:
      valor = 5
      break

    case 4: 
    valor = 2.0
    break

    case 5:
      valor = 1.50
      break
}

console.log(`Total: R$${(valor * quantidade).toFixed(2)}`)