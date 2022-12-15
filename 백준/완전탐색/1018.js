/*
    https://www.acmicpc.net/problem/1018
*/

const input = require("fs")
  .readFileSync(__dirname + "/1018.txt")
  .toString()
  .trim()
  .split("\n");

// N : 행, M : 열
let [N, M] = input[0].split(" ");
let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push([...input[i]]);
}

let result = [];

// [n,m] 시작지점.
for (let n = 0; n < N - 7; n++) {
  for (let m = 0; m < M - 7; m++) {
    let cnt1 = 0;
    let cnt2 = 0;
    for (let i = n; i < n + 8; i++) {
      for (let j = m; j < m + 8; j++) {
        if ((i + j) % 2 === 0) {
          if (arr[i][j] !== "W") {
            cnt1++;
          }
          if (arr[i][j] !== "B") {
            cnt2++;
          }
        } else {
          if (arr[i][j] !== "B") {
            cnt1++;
          }
          if (arr[i][j] !== "W") {
            cnt2++;
          }
        }
      }
    }
    result.push(Math.min(cnt1, cnt2));
  }
}

console.log(Math.min(...result));
