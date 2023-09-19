var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [num1, num2] = lines[0].split(" ");

if (+num1 < +num2) {
  if (num2 % num1 == 0) {
    console.log("Sao Multiplos");
  } else {
    console.log("Nao sao Multiplos");
  }
} else {
  if (num1 % num2 == 0) {
    console.log("Sao Multiplos");
  } else {
    console.log("Nao sao Multiplos");
  }
}
