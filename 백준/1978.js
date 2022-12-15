/*
    https://www.acmicpc.net/status?user_id=raon9401&problem_id=1978&from_mine=1
*/

let input = require("fs")
  .readFileSync(__dirname + "/1978.txt")
  .toString()
  .split("\n");

let arr = input[1].split(" ").map((el) => Number(el));

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  } else if (num % 2 !== 0) {
    let sqrt = parseInt(Math.sqrt(num));
    for (let j = 3; j <= sqrt; j += 2) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }
}

function primeNubmer(arr) {
  let cnt = 0;

  for (let i of arr) {
    if (isPrime(i)) {
      cnt++;
    }
  }
  return cnt;
}

console.log(primeNubmer(arr));
