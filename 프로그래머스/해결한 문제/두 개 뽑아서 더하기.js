/*
    2중 배열
    모든 경우 비교
    정렬
    중복 제거
*/

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  answer.sort((a, b) => a - b);
  answer = [...new Set(answer)];
  return answer;
}

console.log(solution([2, 1, 3, 4, 1]));
