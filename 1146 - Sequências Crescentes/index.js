var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

let numero1, numero2;
let resposta = "";

for (i = 0; i < lines.length; i++) {
  numero1 = parseInt(lines[i]);
  if (numero1 === 0) {
    console.log(resposta.trim());
    break;
  } else {
    for (j = 1; j <= numero1; j++) {
      if (j === numero1) {
        resposta += j + "\n";
      } else {
        resposta += j + " ";
      }
    }
  }
}
