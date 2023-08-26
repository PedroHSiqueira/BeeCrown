var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const tipo = lines[0];
const divisao = lines[1];
const comida = lines[2];

if (tipo === "vertebrado") {
  if (divisao === "ave") {
    if (comida === "carnivoro") {
      console.log("aguia");
    } else {
      console.log("pomba");
    }
  } else {
    if (comida === "onivoro") {
      console.log("homem");
    } else {
      console.log("vaca");
    }
  }
} else {
  if (divisao === "inseto") {
    if (comida === "hematofago") {
      console.log("pulga");
    } else {
      console.log("lagarta");
    }
  } else {
    if (comida === "hematofago") {
      console.log("sanguessuga");
    } else {
      console.log("minhoca");
    }
  }
}
