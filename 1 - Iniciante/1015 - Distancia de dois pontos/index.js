var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const num1 = lines[0].split(" ")
const num2 = lines[1].split(" ")

const distancia = Math.sqrt((num2[0] - num1[0]) ** 2 + (num2[1] - num1[1]) ** 2).toFixed(4)

console.log(distancia)