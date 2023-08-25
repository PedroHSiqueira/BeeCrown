var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numero = +lines[0];

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
}
