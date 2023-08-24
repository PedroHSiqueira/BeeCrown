var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numeros = lines[0].split(" ").map((x) => parseFloat(x));

let num1 = numeros[0];
let num2 = numeros[1];
let num3 = numeros[2];

let area = ((num1 + num2) * num3) / 2;

if (num1 < num2 + num3 && num2 < num3 + num1 && num3 < num1 + num2) {
  console.log(`Perimetro = ${(num1 + num2 + num3).toFixed(1)}`);
} else {
  console.log(`Area = ${area.toFixed(1)}`);
}
