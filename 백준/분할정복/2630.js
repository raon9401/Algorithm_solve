/*
    https://www.acmicpc.net/problem/2630
    https://velog.io/@rmaomina/boj-2630-javascript - 참고 사이트
*/

const input = require("fs")
  .readFileSync(__dirname + "/2630.txt")
  .toString()
  .trim()
  .split("\n");

let [N, ...paper] = input;
N = Number(N);
paper = input.slice(1).map((el) => el.split(" ").map((el) => Number(el)));

function solution(number, paper) {
  let white = 0,
    blue = 0;
  function divide(x, y, length) {
    let tempCount = 0;
    for (let i = x; i < x + length; i += 1) {
      for (let j = y; j < y + length; j += 1) {
        if (paper[i][j]) tempCount += 1;
      }
    }

    if (!tempCount) {
      white += 1;
    } else if (tempCount === length * length) {
      blue += 1;
    } else {
      divide(x, y, length / 2);
      divide(x, y + length / 2, length / 2);
      divide(x + length / 2, y, length / 2);
      divide(x + length / 2, y + length / 2, length / 2);
    }
  }

  divide(0, 0, number);
  console.log(white);
  console.log(blue);
}

solution(N, paper);
