var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const fonte = +lines[0]

const anos = Math.floor(fonte / 365)
const meses = Math.floor((fonte % 365) / 30)
const dias = Math.floor((fonte % 365) % 30)

console.log(`${anos} ano(s)`)
console.log(`${meses} mes(es)`)
console.log(`${dias} dia(s)`)