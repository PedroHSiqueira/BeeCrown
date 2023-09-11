var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let sinal = lines.shift();
let posicao = [];
let valor;
let m = 1;

for (let i = 7; i < 12; i++) {
  valor = i * 12;
  for (let j = 12 - i; j < 12 / 2 + m; j++) {
    posicao.push(valor + j);
  }
  m++;
}

let soma = 0;
let contador = 0;

for (let i = 0; i < 144; i++) {
  let num = parseFloat(lines.shift());
  if (posicao.indexOf(i) != -1) {
    soma += num;
    contador++;
  }
}

if (sinal == "S") {
  console.log(soma.toFixed(1));
} else {
  console.log((soma / contador).toFixed(1));
}
