var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numero = Number(lines[0]);

const pi = 3.14159;

const area = pi * numero ** 2;

console.log(`A=${area.toFixed(4)}`);
