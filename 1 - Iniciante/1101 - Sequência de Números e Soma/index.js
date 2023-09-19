var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let resposta = "";
let soma = 0;
let index = 0;

while (true) {
  let atual = lines[index].split(" ");
  let num1 = +atual[0];
  let num2 = +atual[1];

  if (num1 <= 0 || num2 <= 0) {
    break;
  }

  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      resposta = resposta + i + " ";
      soma += i;
    }

    console.log(resposta + `Sum=${soma}`);
  } else {
    for (let i = num2; i <= num1; i++) {
      resposta = resposta + i + " ";
      soma += i;
    }

    console.log(resposta + `Sum=${soma}`);
  }

  soma = 0;
  resposta = "";
  index++;
}
