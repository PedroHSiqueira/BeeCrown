var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const vezes = +lines.shift();
let contador = 0;

do {
  let atual = lines.shift();

  let cont = 0;

  if (atual.length > 4) {
    console.log("3");
  } else {
    let cont = 0;

    if (atual[0] == "o") cont++;
    if (atual[1] == "n") cont++;
    if (atual[2] == "e") cont++;

    if (cont >= 2) {
      console.log("1");
    } else {
      console.log("2");
    }
  }

  contador++;
} while (contador < vezes);
