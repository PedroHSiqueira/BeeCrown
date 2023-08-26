var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

for (let i = 1; i <= 9; i += 2) {
  console.log(`I=${i} J=7`);
  console.log(`I=${i} J=6`);
  console.log(`I=${i} J=5`);
}
