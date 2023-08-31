var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const Numeros = lines[0].split(" ");

const A = +Numeros[0];
const B = +Numeros[1];
const C = +Numeros[2];

if (B < A && C >= B) {
  console.log(":)");
} else if (B > A && C > B && C - B >= B - A) {
  console.log(":)");
} else if (B < A && C < B && B - C < A - B) {
  console.log(":)");
} else if (B === A && C > B) {
  console.log(":)");
} else {
  console.log(":(");
}
