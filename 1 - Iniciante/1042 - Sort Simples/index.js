var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [a, b, c] = lines[0].split(" ");

a = Number(a);
b = Number(b);
c = Number(c);

if (a < b && a < c) {
  console.log(a);

  if (b < c) {
    console.log(b);
    console.log(c);
  } else {
    console.log(c);
    console.log(b);
  }
} else if (b < c) {
  console.log(b);

  if (c < a) {
    console.log(c);
    console.log(a);
  } else {
    console.log(a);
    console.log(c);
  }
} else {
  console.log(c);

  if (a < b) {
    console.log(a);
    console.log(b);
  } else {
    console.log(b);
    console.log(a);
  }
}

console.log();

console.log(a);
console.log(b);
console.log(c);
