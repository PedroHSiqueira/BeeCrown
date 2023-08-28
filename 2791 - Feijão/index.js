var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [c1, c2, c3, c4] = lines[0].split(" ");

c1 = Number(c1);
c2 = Number(c2);
c3 = Number(c3);
c4 = Number(c4);

if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 1) {
  console.log("4");
} else if (c1 === 0 && c2 === 0 && c3 === 1 && c4 === 0) {
  console.log("3");
} else if (c1 === 0 && c2 === 1 && c3 === 0 && c4 === 0) {
  console.log("2");
} else if (c1 === 1 && c2 === 0 && c3 === 0 && c4 === 0) {
  console.log("1");
}
