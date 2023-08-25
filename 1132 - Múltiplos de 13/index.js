var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numero1 = +lines[0];
const numero2 = +lines[1];
let soma = 0;

if (numero1 < numero2) {
  for (let i = numero1; i <= numero2; i++) {
    if (i % 13 !== 0) {
      soma += i;
    }
  }
} else {
  for (let i = numero2; i <= numero1; i++) {
    if (i % 13 !== 0) {
      soma += i;
    }
  }
}

console.log(soma);
