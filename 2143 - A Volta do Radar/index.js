var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numeros = lines.map((x) => parseInt(x));

while (numeros !== 0) {
  const atual = numeros.shift();

  if (atual === 0) {
    break;
  }

  for (let i = 0; i < atual; i++) {
    const verificacaoAtual = numeros.shift();
    if (verificacaoAtual % 2 === 0) {
      console.log(verificacaoAtual * 2 - 2);
    } else {
      console.log(verificacaoAtual * 2 - 1);
    }
  }
}
