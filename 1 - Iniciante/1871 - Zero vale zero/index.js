var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

while (true) {
  let [a, b] = lines.shift().split(" ");

  if (+a == 0 && +b == 0) {
    break;
  }

  let soma = (Number(a) + Number(b)).toString();

  console.log(soma.replace(/0/g, ''));
}
