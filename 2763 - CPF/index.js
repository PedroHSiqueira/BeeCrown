var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numerosCPF = lines[0].split(".")
const numerosFinalCPF = numerosCPF.pop().split("-")

console.log(numerosCPF[0])
console.log(numerosCPF[1])
console.log(numerosFinalCPF[0])
console.log(numerosFinalCPF[1])