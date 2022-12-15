/*
    https://www.acmicpc.net/problem/2447
*/

const input = require("fs")
  .readFileSync(__dirname + "/2447.txt")
  .toString()
  .trim();

let N = Number(input);
const lines = [];

function printStars(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      star(i, j, num);
    }
    lines.push("\n");
  }
}

function star(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    // (1,1), (1,4), (1,7)...
    console.log("공백", i, j);

    lines.push(" ");
  } else {
    if (num === 1) {
      lines.push("*");
    } else {
      // (3,3) = (1,1)이 되고,
      // (3,4) = (1,1)이 된다.
      // (9,9), (27,27)도 동일한 방식으로 재귀 호출된다.
      console.log("별", i, j);
      star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  }
}

printStars(N);
console.log(lines.join(""));
