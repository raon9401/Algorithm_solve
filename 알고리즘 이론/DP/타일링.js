// dynamic with tabulation: O(N)
// tabulation은 데이터를 테이블에 정리하면서 bottom-up 방식으로 해결하는 기법을 말합니다.
let tiling = function (n) {
  const memo = [0, 1, 2];
  if (n <= 2) return memo[n];
  for (let size = 3; size <= n; size++) {
    memo[size] = memo[size - 1] + memo[size - 2];
  }
  return memo[n];
};

// // 재귀를 위한 보조 함수(auxiliary function)을 선언)
// // top-down 방식
// const aux = (size) => {
//     // 이미 해결한 문제는 풀지 않는다.
//     if (memo[size] !== undefined) return memo[size]
//     if (size <= 2) return memo[n];
//     memo[size] = aux(size - 1) + aux(size - 2);
//     return memo[size];
//   };
//   return aux(n);
// };

console.log(tiling(5));
