let input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

let senhas = lines.map((x) => Number(x));
let contador = 0;

do {
  if (senhas[contador] !== 2002) {
    console.log("Senha Invalida");
    contador++
  } else {
    console.log("Acesso Permitido");
    break;
  }
} while (true);
