var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [nota1, nota2, nota3, nota4] = lines[0].split(" ");
let notaExame = +lines[1];

let peso1 = 2;
let peso2 = 3;
let peso3 = 4;
let peso4 = 1;

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);
nota4 = parseFloat(nota4);

const media =
  (nota1 * peso1 + nota2 * peso2 + nota3 * peso3 + nota4 * peso4) /
  (peso1 + peso2 + peso3 + peso4);

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
  console.log("Aluno aprovado.");
} else if (media < 5.0) {
  console.log("Aluno reprovado.");
} else {
  console.log("Aluno em exame.");
  console.log(`Nota do exame: ${notaExame.toFixed(1)}`);

  if (notaExame >= 5.0) {
    console.log("Aluno aprovado.");
    console.log(`Media final: ${((notaExame + media) / 2).toFixed(1)}`);
  } else {
    console.log("Aluno reprovado.");
    console.log(`Media final: ${((notaExame + media) / 2).toFixed(1)}`);
  }
}
