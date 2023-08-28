var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let line = lines.shift().split(" ");
let tomada1 = parseInt(line[0]);
let tomada2 = parseInt(line[1]);
let tomada3 = parseInt(line[2]);
let tomada4 = parseInt(line[3]);

let totaltomadas = tomada1 + tomada2 + tomada3 + tomada4 - 3;
console.log(totaltomadas);
