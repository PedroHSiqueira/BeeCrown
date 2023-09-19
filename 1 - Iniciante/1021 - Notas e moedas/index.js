var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valor = lines[0];

console.log("NOTAS:");

if (valor / 100) {
  console.log(`${Math.floor(valor / 100)} nota(s) de R$ 100.00`);
  valor = valor % 100;
} else {
  console.log(`0 nota(s) de R$ 100.00`);
}

if (valor / 50) {
  console.log(`${Math.floor(valor / 50)} nota(s) de R$ 50.00`);
  valor = valor % 50;
} else {
  console.log(`0 nota(s) de R$ 50.00`);
}

if (valor / 20) {
  console.log(`${Math.floor(valor / 20)} nota(s) de R$ 20.00`);
  valor = valor % 20;
} else {
  console.log(`0 nota(s) de R$ 20.00`);
}

if (valor / 10) {
  console.log(`${Math.floor(valor / 10)} nota(s) de R$ 10.00`);
  valor = valor % 10;
} else {
  console.log(`0 nota(s) de R$ 10.00`);
}

if (valor / 5) {
  console.log(`${Math.floor(valor / 5)} nota(s) de R$ 5.00`);
  valor = valor % 5;
} else {
  console.log(`0 nota(s) de R$ 5.00`);
}

if (valor / 2) {
  console.log(`${Math.floor(valor / 2)} nota(s) de R$ 2.00`);
  valor = valor % 2;
} else {
  console.log(`0 nota(s) de R$ 2.00`);
}

console.log("MOEDAS:");

if (valor / 1.0) {
  console.log(`${Math.floor(valor / 1.0)} moeda(s) de R$ 1.00`);
  valor = valor % 1.0;
} else {
  console.log(`0 moeda(s) de R$ 1.00`);
}

if (valor / 0.5) {
  console.log(`${Math.floor(valor / 0.5)} moeda(s) de R$ 0.50`);
  valor = valor % 0.5;
} else {
  console.log(`0 moeda(s) de R$ 0.50`);
}

if (valor / 0.25) {
  console.log(`${Math.floor(valor / 0.25)} moeda(s) de R$ 0.25`);
  valor = (valor % 0.25).toFixed(2);
} else {
  console.log(`0 moeda(s) de R$ 0.25`);
}

if (valor / 0.1) {
  console.log(`${Math.floor(valor / 0.1)} moeda(s) de R$ 0.10`);
  valor = (valor % 0.1).toFixed(2);
} else {
  console.log(`0 moeda(s) de R$ 0.10`);
}

if (valor / 0.05) {
  console.log(`${Math.floor(valor / 0.05)} moeda(s) de R$ 0.05`);
  valor = (valor % 0.05).toFixed(2);
} else {
  console.log(`0 moeda(s) de R$ 0.05`);
}

if (valor / 0.01) {
  console.log(`${Math.floor(valor / 0.01)} moeda(s) de R$ 0.01`);
  valor = (valor % 0.01).toFixed(2);
} else {
  console.log(`0 moeda(s) de R$ 0.01`);
}
