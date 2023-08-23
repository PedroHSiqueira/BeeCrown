var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const palavra = lines[0];

if (palavra.length >= 10) {
  console.log("palavrao");
} else {
  console.log("palavrinha");
}
