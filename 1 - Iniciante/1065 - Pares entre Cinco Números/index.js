var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numero = lines.map((x) => Number(x));

let par = 0;

for (let i = 0; i < numero.length - 1; i++) {
  if (numero[i] % 2 == 0) {
    par++;
  }
}

console.log(`${par} valores pares`);
