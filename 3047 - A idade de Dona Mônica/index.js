var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const monica = lines.shift()
const a = +lines[0]
const b = +lines[1]

let maior;

let falta = Math.abs((a + b) - monica)

if(a > b){
    maior = a
}else if(b > a){
    maior = b
}

if(falta > maior){
    maior = falta
}
    
console.log(maior)