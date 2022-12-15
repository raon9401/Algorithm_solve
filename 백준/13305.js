/*
    https://www.acmicpc.net/problem/13305

    BigInt를 사용하는 문제.

    N : 도시의 갯수
    인접한 두 도시를 연결하는 도로의 길이
    주유소의 리터당 가격 - N개가 주어진다.

      2   3   1    : 연결된 도로의 길이
    5   2   4   1  : 주유소의 리터당 가격
*/

const input = require("fs")
  .readFileSync(__dirname + "/13305.txt")
  .toString()
  .trim()
  .split("\n");

let N = input[0];
let road = input[1].split(" ").map((el) => BigInt(el));
let pay = input[2].split(" ").map((el) => BigInt(el));

let result = 0n;
let min = pay[0];

for (let i = 0; i < N - 1; i++) {
  if (min > pay[i]) {
    min = pay[i];
  }
  result += min * road[i];
}

console.log(String(result));
