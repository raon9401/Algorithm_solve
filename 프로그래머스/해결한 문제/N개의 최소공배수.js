/*
    유클리드 호제법으로 해결하면 제일빠르다.
*/

// 최소 공약수 구하는 방법
function gcd(a, b) {
  let c = 0;
  while (b) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
}

// 최소 공배수 구하는 방법
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  var answer = arr[0];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

console.log(solution([2, 13]));
// console.log(solution([2, 14]));
