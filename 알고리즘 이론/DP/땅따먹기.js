// 효율성에서 통과 될때도 있고 안될때도 있음.
// Bottom-Up 방식
// 다음 행에 자신과 같은 열을 제외한 가장 큰수와 더한 후 해당 열에 값을 할당한다.
function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      land[i][j] += Math.max(...land[i - 1].filter((el, index) => index !== j));
    }
  }
  return Math.max(...land[land.length - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
