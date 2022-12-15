/*
    10진법 수를 2진법으로 변경
    -> 배열로 변경
    -> while문 사용
    -> 2진함수 만들어서 사용 : 배열 2개 정리해야함.
    
    2진함수 거치고 나온 배열을 정리하기.
    -> 둘중 하나라도 1이면 '#'을 문자열에 추가.
    -> 아니면 " "을 문자열에 추가
*/

function binary(n, num) {
  let result = [];
  for (let i = n - 1; i >= 0; i--) {
    result[i] = parseInt(num % 2);
    num /= 2;
  }
  return result;
}

function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    arr1[i] = binary(n, arr1[i]);
    arr2[i] = binary(n, arr2[i]);
  }
  for (let i = 0; i < n; i++) {
    answer[i] = "";
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === 1 || arr2[i][j] === 1) {
        answer[i] += "#";
      } else {
        answer[i] += " ";
      }
    }
  }
  return answer;
}

// console.log(binary(9, 5));
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
