/*
    https://www.acmicpc.net/problem/15652
*/

const input = require("fs")
  .readFileSync(__dirname + "/15652.txt")
  .toString()
  .trim()
  .split(" ");

let [N, M] = input;
N = Number(N); // 최대 수
M = Number(M); // 반복 횟수

let result = "";
const output = [];

function dfs(cnt, start) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = start; i < N; i++) {
    output.push(i + 1);
    dfs(cnt + 1, i);

    output.pop(); // 1 -> 2 -> 3 -> 4
  }
}

dfs(0, 0);
console.log(result);
