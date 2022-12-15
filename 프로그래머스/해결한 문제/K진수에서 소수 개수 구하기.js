const isPrime = (num) => {
  if (num === 2) {
    return true;
  } else if (num % 2 !== 0) {
    let sqrt = parseInt(Math.sqrt(num));
    for (let j = 3; j <= sqrt; j += 2) {
      if (num % j === 0) {
        // console.log("소수x", num);
        return false;
      }
    }
    // console.log("소수o", num);
    return true;
  }
};

function solution(n, k) {
  var answer = 0;
  // k 진수로 변경
  let num = n
    .toString(k)
    .split("0")
    .filter((el) => el !== "");
  for (let i of num) {
    let n = Number(i);
    if (isPrime(n) && n > 1) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
