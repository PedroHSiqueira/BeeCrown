let input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

let line = lines.shift().split(" ");
let horasInicial = +line[0];
let minutosInicial = +line[1];
let horasFinal = +line[2];
let minutosFinal = +line[3];
let totalMinutos = minutosFinal - minutosInicial;
let totalHoras = horasFinal - horasInicial;

if (totalMinutos < 0) {
  totalMinutos += 60;
  totalHoras--;
}
if (totalHoras < 0) {
  totalHoras += 24;
}
if (horasInicial == horasFinal && minutosInicial == minutosFinal)
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
else
  console.log(
    "O JOGO DUROU " + totalHoras + " HORA(S) E " + totalMinutos + " MINUTO(S)"
  );
