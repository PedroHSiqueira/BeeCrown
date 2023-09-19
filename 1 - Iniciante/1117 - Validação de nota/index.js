var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let notasValidas = 0;
let totalNotasValidas = 0
do {
    let nota = +lines.shift()
    const ehNotaValida = nota > 0 && nota <= 10
    if(ehNotaValida){
        notasValidas += 1
        totalNotasValidas += nota
    }else{
        console.log("nota invalida")
    }

} while (notasValidas != 2);

console.log(`media = ${(totalNotasValidas / 2).toFixed(2)}`)
