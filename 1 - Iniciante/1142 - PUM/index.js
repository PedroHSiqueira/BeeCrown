var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const vezes = +lines[0];
let contador = 1;
let pum = "PUM";
let i = 1;

do {
  console.log(`${i} ${i + 1} ${i + 2} ${pum}`);

  contador++;
  i += 4;
} while (contador <= vezes);
