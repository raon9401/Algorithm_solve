const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1);
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]);
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

function solution(nums) {
  var answer = 0;
  let arr = getCombinations(nums, 3);
  for (let i = 0; i < arr.length; i++) {
    let dec = arr[i].reduce((acc, cur) => acc + cur);
    let isPrime = true;
    if (dec % 2 !== 0) {
      let sqrt = parseInt(Math.sqrt(dec));
      for (let j = 3; j <= sqrt; j += 2) {
        if (dec % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 7, 6, 4]));
