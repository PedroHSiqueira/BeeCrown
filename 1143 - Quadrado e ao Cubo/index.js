var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numeros = +lines[0];

for (let i = 1; i <= numeros; i++) {
  console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
}
