var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numero;

let suco = 120;
let morango = 85;
let mamao = 85;
let goiaba = 70;
let manga = 56;
let laranja = 50;
let brocolis = 34;

while (numero != 0) {
  numero = lines.shift();
  let soma = 0;

  for (let i = 0; i < numero; i++) {
    const [quantidade, elemento] = lines.shift().split(" ");

    if (elemento.includes("suco")) {
      soma += quantidade * suco;
    }

    if (elemento.includes("mamao")) {
      soma += quantidade * mamao;
    }

    if (elemento.includes("morango")) {
      soma += quantidade * morango;
    }

    if (elemento.includes("goiaba")) {
      soma += quantidade * goiaba;
    }

    if (elemento.includes("manga")) {
      soma += quantidade * manga;
    }

    if (elemento.includes("laranja")) {
      soma += quantidade * laranja;
    }

    if (elemento.includes("brocolis")) {
      soma += quantidade * brocolis;
    }

    if (elemento.includes("0")) {
      break;
    }
  }
  if (soma >= 110 && soma <= 130) {
    console.log(`${soma} mg`);
  } else if (soma > 130) {
    console.log(`Menos ${Math.abs(130 - soma)} mg`);
  } else if (soma >= 1 && soma <=109) {
    console.log(`Mais ${Math.abs(soma - 110)} mg`);
  }
}
