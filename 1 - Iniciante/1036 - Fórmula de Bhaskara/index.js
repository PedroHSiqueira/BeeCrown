const { off } = require("process");

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [a, b, c] = lines[0].split(" ");

let delta = Math.pow(b, 2) - 4 * a * c;

if (a <= 0 || b <= 0 || c <= 0 || delta <= 0) {
  console.log("Impossivel calcular");
} else {
  const R1 = (-b + Math.sqrt(delta)) / (2 * a);
  const R2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log(`R1 = ${R1.toFixed(5)}`);
  console.log(`R2 = ${R2.toFixed(5)}`);
}
