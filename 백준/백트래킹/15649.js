/*
    https://www.acmicpc.net/problem/15649
    백트래킹 - dfs 사용
*/

const input = require("fs")
  .readFileSync(__dirname + "/15649.txt")
  .toString()
  .trim()
  .split(" ");

let [N, M] = input;
N = Number(N); // 최대 수
M = Number(M); // 반복 횟수

let result = "";
const visited = Array(N).fill(0); // 방문 한지 확인하는 배열
const output = [];

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === 1) continue; // 방문한 곳

    visited[i] = 1;
    output.push(i + 1);
    dfs(cnt + 1);

    output.pop(); // 1 -> 2 -> 3 -> 4
    visited[i] = 0;
  }
}

dfs(0);
console.log(result);
