var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numeros = lines[0].split(' ')

const numero1 = Number(numeros[0])
const numero2 = Number(numeros[1])

const resposta = (100 + numero1) * (numero2 / 100 + 1) - 100

console.log(resposta.toFixed(6))