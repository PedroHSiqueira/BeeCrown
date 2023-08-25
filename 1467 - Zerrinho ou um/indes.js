var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
while (lines.length > 0) {
  let linha = lines.shift();
  let numeros = linha.split(" ");
  let a = parseInt(numeros[0]);
  let b = parseInt(numeros[1]);
  let c = parseInt(numeros[2]);

  if ((a == b) & (b == c)) {
    console.log("*");
  } else if ((a == b) & (b != c)) {
    console.log("C");
  } else if ((a == c) & (c != b)) {
    console.log("B");
  } else if ((b == c) & (c != a)) {
    console.log("A");
  }
}
