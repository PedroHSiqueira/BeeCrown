var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let num1 = +lines[0];
let num2 = +lines[1];

if (num1 < num2) {
  for (let i = num1 + 1; i < num2; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i);
    }
  }
} else {
  for (let i = num2 + 1; i < num1; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i);
    }
  }
}
