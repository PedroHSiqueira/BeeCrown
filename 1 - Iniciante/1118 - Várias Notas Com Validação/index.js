var input = require("fs").readFileSync("stdin", "utf8");
let l1 = input.split("\n").map(Number);

let limite = 0;
let numero1;
let numero2;
let media;

for (i = 0; i < l1.length; i++) {
  if (l1[i] >= 0 && l1[i] <= 10) {
    limite++;
    if (limite === 1) {
      numero1 = l1[i];
    }
    if (limite === 2) {
      numero2 = l1[i];
      media = (numero1 + numero2) / 2;
      console.log("media = " + media.toFixed(2));
    }
    if (limite > 2 && l1[i] === 2) {
      console.log("novo calculo (1-sim 2-nao)");
      break;
    }
  }

  if (limite < 2 && l1[i] > 10 === true) {
    console.log("nota invalida");
  }

  if (limite < 2 && l1[i] < 0 === true) {
    console.log("nota invalida");
  }

  if (limite > 2 === true) {
    console.log("novo calculo (1-sim 2-nao)");
  }

  if (l1[i] === 1 && limite > 2) {
    limite = 0;
  }
}
