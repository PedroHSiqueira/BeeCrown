var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numero1 = lines[0].split(" ")


console.log((numero1[0] / numero1[1]).toFixed(2))