var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

for (let numeros of lines) {
  const separados = numeros.split(" ");
  const numerais = separados.map((x) => Number(x));

  if (numerais[0] > numerais[1]) {
    console.log("Decrescente");
  } else if (numerais[0] < numerais[1]) {
    console.log("Crescente");
  } else {
    break;
  }
}
