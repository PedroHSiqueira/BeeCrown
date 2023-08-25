var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numero1 = +lines[0];
const numero2 = +lines[1];

let soma = 0;

if (numero1 !== numero2) {
  if (numero1 < numero2) {
    for (let i = numero1 + 1; i < numero2; i++) {
      if (i % 2 === 1) {
        soma += i;
      } else if (i % 2 === -1) {
        soma += i;
      }
    }
  } else if (numero2 < numero1) {
    for (let i = numero2 + 1; i < numero1; i++) {
      if (i % 2 === 1) {
        soma += i;
      } else if (i % 2 === -1) {
        soma += i;
      }
    }
  }

  console.log(soma);
} else {
  console.log("0");
}
