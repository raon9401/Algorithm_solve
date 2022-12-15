/*
    https://www.acmicpc.net/problem/13908

=> 포함 배제의 원리를 사용해 풀어보자.
*/

const input = require("fs")
  .readFileSync(__dirname + "/13908.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);
let [n, m] = input[0].split(" ").map((el) => Number(el));
let arr = [];
if (m !== 0) {
  arr = input[1].split(" ").map((el) => Number(el));
}

console.log(n, m, arr);
let cnt = 0;

for (let i = 0; i < 10 ** n; i++) {
  for (let j = 0; j < m; j++) {
    if (String(i).includes(String(arr[j]))) {
      cnt++;
    }
  }
}
console.log(cnt);
