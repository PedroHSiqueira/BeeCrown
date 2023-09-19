var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numeros = lines.map((x) => Number(x));

let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for (let i = 0; i < 5; i++) {
  if (numeros[i] % 2 === 0) {
    par++;
  } else {
    impar++;
  }

  if (numeros[i] > 0) {
    positivo++;
  }

  if (numeros[i] < 0) {
    negativo++;
  }
}
console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${positivo} valor(es) positivo(s)`);
console.log(`${negativo} valor(es) negativo(s)`);
