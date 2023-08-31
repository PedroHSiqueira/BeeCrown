var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

do {
  let atual = lines.shift();

  if (atual == 0) {
    break;
  }

  let [a, b, c] = atual.split(" ");

  console.log(Math.floor(Math.sqrt((a * b * 100) / c)));
} while (true);
