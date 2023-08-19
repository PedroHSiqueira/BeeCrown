var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C] = lines.shift().split(' ').map(x => Number(x))

const maiorAB = (A + B + Math.abs(A - B)) / 2

const maiorIndefinido = (C + maiorAB + Math.abs(C - maiorAB)) / 2

console.log(maiorIndefinido)