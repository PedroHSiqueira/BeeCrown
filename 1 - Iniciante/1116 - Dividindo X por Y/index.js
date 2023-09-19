var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const vezes = +lines.shift();

for (let i = 0; i < vezes; i++) {
  let [num1, num2] = lines[i].split(" ");

  if (+num2 !== 0) {
    console.log((num1 / num2).toFixed(1));
  } else {
    console.log("divisao impossivel");
  }
}
