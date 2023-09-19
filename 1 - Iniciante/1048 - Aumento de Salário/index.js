var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const salarioAtual = +lines[0]

if(salarioAtual >= 0 && salarioAtual <= 400.00){
  console.log(`Novo salario: ${(salarioAtual + (salarioAtual * 0.15)).toFixed(2)}`)
  console.log(`Reajuste ganho: ${(salarioAtual * 0.15).toFixed(2)}`)
  console.log("Em percentual: 15 %")
}else if(salarioAtual > 400.00 && salarioAtual <= 800.00){
  console.log(`Novo salario: ${(salarioAtual + (salarioAtual * 0.12)).toFixed(2)}`)
  console.log(`Reajuste ganho: ${(salarioAtual * 0.12).toFixed(2)}`)
  console.log("Em percentual: 12 %")
}else if(salarioAtual > 800.00 && salarioAtual <= 1200.00){
  console.log(`Novo salario: ${(salarioAtual + (salarioAtual * 0.10)).toFixed(2)}`)
  console.log(`Reajuste ganho: ${(salarioAtual * 0.10).toFixed(2)}`)
  console.log("Em percentual: 10 %")
}else if(salarioAtual > 1200.00 && salarioAtual <= 2000.00){
  console.log(`Novo salario: ${(salarioAtual + (salarioAtual * 0.07)).toFixed(2)}`)
  console.log(`Reajuste ganho: ${(salarioAtual * 0.07).toFixed(2)}`)
  console.log("Em percentual: 7 %")
}else{
  console.log(`Novo salario: ${(salarioAtual + (salarioAtual * 0.04)).toFixed(2)}`)
  console.log(`Reajuste ganho: ${(salarioAtual * 0.04).toFixed(2)}`)
  console.log("Em percentual: 4 %")
}
