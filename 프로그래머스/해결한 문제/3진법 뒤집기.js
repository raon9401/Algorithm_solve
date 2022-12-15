/*
  3진법 : 3으로 계속 나누기
  while 반복문
  n >= 3 까지 반복
  parseInt(문자열과 숫자,n) n진수 -> 10진수
*/

function solution(n) {
  var answer = 0;
  let arr = [];
  let three = 1;
  while (n > 0) {
    arr.push(parseInt(n % 3));
    n = parseInt(n / 3);
  }
  console.log(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    answer += arr[i] * three;
    three *= 3;
  }
  return answer;
}

console.log(solution(78413450));
