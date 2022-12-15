function solution(N, number) {
  // 배열의 각 요소마다
  const set = new Array(8).fill().map(() => new Set());

  for (let i = 0; i < 8; i++) {
    set[i].add(Number(N.toString().repeat(i + 1)));
    // console.log(set[i]);
    for (let j = 0; j < i; j++) {
      for (const arg1 of set[j]) {
        for (const arg2 of set[i - j - 1]) {
          // 앞뒤 순서 바꿔주는 경우
          set[i].add(arg1 + arg2);
          set[i].add(arg1 - arg2);
          set[i].add(arg1 * arg2);
          set[i].add(arg1 / arg2); // 자스는 0 나누는거 상관없음 -> infinity
        }
      }
    }

    if (set[i].has(number)) {
      console.log(set);

      return i + 1;
    }
  }

  return -1;
}

console.log(solution(5, 12));
