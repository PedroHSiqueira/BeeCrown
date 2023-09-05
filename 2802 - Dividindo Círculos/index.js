var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const Num = parseInt(lines.shift());

const vertices = Num + (Num * (Num - 1) * (Num - 2) * (Num - 3)) / 24;
const areas = (Num * (Num - 1)) / 2 + (Num * (Num - 1) * (Num - 2) * (Num - 3)) / 12 + Num;
const partes = 1 + areas - vertices;

console.log(partes);