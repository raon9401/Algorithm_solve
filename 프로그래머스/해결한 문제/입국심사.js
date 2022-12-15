/*
    https://taesung1993.tistory.com/63
    이분 탐색 문제
    데이터가 엄청 클 경우 이분탐색을 사용해야 한다.

    n명의 입국심사 인원 대기중
    심사대 갯수와 시간 times
    모든 사람이 심사 받는 시간 최소한으로 하고 싶다.
    
    최소 시간과 최대 시간
    최소 시간 : 가장 적게 걸리는 시간 -> 제일 작은시간
    최대 시간 : 가장 오래 걸리는 시간 -> 인원수 * 제일 큰수
*/

function solution(n, times) {
  let min = Math.min(...times);
  let max = Math.max(...times) * n;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    // 중간 값으로 몇명을 심사할 수 있는지 확인.
    // cnt += mid/times[i] 의 반복문.
    // mid가 33일 경우 cnt = 7 = 33/7 + 33/10
    let cnt = times.reduce((acc, cur) => (acc += Math.floor(mid / cur)), 0);

    // 검사할 인원(n)과 비교
    if (cnt >= n) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return min;
}

console.log(solution(6, [7, 10]));
