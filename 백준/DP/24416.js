// https://www.acmicpc.net/problem/24416

const input = require("fs")
  .readFileSync(__dirname + "/24416.txt")
  .toString()
  .trim()
  .split();

let N = Number(input[0]);

function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

function fibonacci(n) {
  let memo = [0, 1, 1];
  let cnt = 0;
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
    cnt++;
  }
  return cnt;
}

console.log(fib(N), fibonacci(N));
