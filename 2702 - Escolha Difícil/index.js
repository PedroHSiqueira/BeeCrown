var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let disponivel = lines.shift().split(" ");
let pedido = lines.shift().split(" ");
let pedidoDisponivel = Number(disponivel[0]);
let pedidoDisponivel2 = Number(disponivel[1]);
let pedidoDisponivel3 = Number(disponivel[2]);
let requisitado = Number(pedido[0]);
let requisitado2 = Number(pedido[1]);
let requisitado3 = Number(pedido[2]);
let falta = 0;

if (requisitado - pedidoDisponivel >= 0) {
  falta += requisitado - pedidoDisponivel;
}
if (requisitado2 - pedidoDisponivel2 >= 0) {
  falta += requisitado2 - pedidoDisponivel2;
}
if (requisitado3 - pedidoDisponivel3 >= 0) {
  falta += requisitado3 - pedidoDisponivel3;
}
console.log(falta);
