/* 
    left ~ right 까지의 수 중에서
    약수의 개수가 홀수이면 -
    약수가 홀수인 경우 - sqrt 한 값을 제곱한 값이 i와 같을때 홀수이다.
    
    약수의 개수가 짝수이면 + ; 위 경우가 아닌경우

    Number 메서드 중에 정수인지 아닌지 판별해주는 메서드 있음
*/

function solution(left, right) {
  var answer = 0;
  let sqrtNum = 0;
  for (let i = left; i <= right; i++) {
    sqrtNum = parseInt(Math.sqrt(i));
    if (sqrtNum * sqrtNum === i) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(13, 17));
