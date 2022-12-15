/*
    https://www.acmicpc.net/problem/15651 
*/

const input = require("fs")
  .readFileSync(__dirname + "/15651.txt")
  .toString()
  .trim()
  .split(" ");

let [N, M] = input;
N = Number(N); // 최대 수
M = Number(M); // 반복 횟수

let result = "";
const output = [];

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    output.push(i + 1);
    dfs(cnt + 1);

    output.pop(); // 1 -> 2 -> 3 -> 4
  }
}

dfs(0);
console.log(result);
