var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const Numeros = lines[0].split(' ').map( x => Number(x))

if(Numeros[0] > Numeros[1]){
  console.log(Numeros[0])
}else if(Numeros[0] < Numeros[1] ){
  console.log(Numeros[1])
}else{
  console.log(Numeros[0] || Numeros[1])
}
