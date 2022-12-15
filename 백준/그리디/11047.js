// https://www.acmicpc.net/problem/11047

const input = require("fs")
  .readFileSync("/home/jhc/algorithm/백준/그리디/11047.txt")
  .toString()
  .trim()
  .split("\n");

// N : 동전 종류, K : 목표 금액
let [N, K] = input[0].split(" ").map((el) => Number(el));
const sortCoin = input
  .slice(1, input.length)
  .map((el) => Number(el))
  .sort((a, b) => b - a);

let cnt = 0;
for (let i = 0; i < sortCoin.length; i++) {
  cnt += Math.floor(K / sortCoin[i]);
  K %= sortCoin[i];
}
console.log(cnt);
