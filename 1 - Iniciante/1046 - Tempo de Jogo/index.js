var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let line = lines.shift().split(" ");
let inicial = parseInt(line[0]);
let final = parseInt(line[1]);
if (inicial > final) {
  console.log("O JOGO DUROU " + (24 - (inicial - final)) + " HORA(S)");
} else if (final > inicial) {
  console.log("O JOGO DUROU " + (final - inicial) + " HORA(S)");
} else {
  console.log("O JOGO DUROU 24 HORA(S)");
}
