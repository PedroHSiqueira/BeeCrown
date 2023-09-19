var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numero1 = +lines[0];
const numero2 = +lines[1];

console.log(numero1 % numero2);
