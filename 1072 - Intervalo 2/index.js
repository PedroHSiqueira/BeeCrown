var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const vezes = lines.shift();

let numeros = lines.map((x) => Number(x));
let setIn = 0;
let setOut = 0;

for (let i = 0; i < vezes; i++) {
  if (numeros[i] >= 10 && numeros[i] <= 20) {
    setIn += 1;
  } else {
    setOut += 1;
  }
}

console.log(`${setIn} in`);
console.log(`${setOut} out`);
