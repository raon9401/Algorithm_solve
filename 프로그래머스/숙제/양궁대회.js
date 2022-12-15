/*
    https://programmers.co.kr/learn/courses/30/lessons/92342
    BFS 문제

    n : 화살 쏠 수 있는 횟수.
    info : 어피치가 맞춘 점수

    원하는 결과 : 라이언이 n 발을 사용해서 어피치보다 더 많은 점수를 따야한다. - 최대점수차이나게 해야함.

*/

function solution(n, info) {
  let result = Array(11).fill(0); // 점수 배열
  let max = 0; // 최대 값을 비교하기 위한 변수

  function shot(peachScore, ryanScore, count, idx, scoreBoard) {
    // peachScore : 어피치 점수
    // ryanScore : 라이언 점수
    // count : 쏜 횟수
    // idx : index
    // scoreBoard : 라이언이 쏘는중인 배열
    // n : 쏴야하는 횟수

    // 쏜 횟수가 쏴야하는 횟수보다 많을 경우.
    // 예외 처리.
    if (n < count) return;

    // 10점 까지 모두 파악한 상태.
    // 완료 상태
    if (idx > 10) {
      // 라이언과 피치의 점수차이
      let scoreDiff = ryanScore - peachScore;

      // 최대 점수 변환해주기.
      if (max < scoreDiff) {
        // 화살을 모두 다 쓰기 전에 끝나면 0점에 모두 사용
        scoreBoard[10] = n - count;
        max = scoreDiff;
        result = scoreBoard;
      }
      return;
    }

    //
    if (n > count) {
      let candidate = [...scoreBoard];
      candidate[10 - idx] = info[10 - idx] + 1;
      shot(
        peachScore,
        ryanScore + idx,
        count + info[10 - idx] + 1,
        idx + 1,
        candidate
      );
    }

    if (info[10 - idx] > 0) {
      shot(peachScore + idx, ryanScore, count, idx + 1, scoreBoard);
    } else {
      shot(peachScore, ryanScore, count, idx + 1, scoreBoard);
    }
  }

  shot(0, 0, 0, 0, result);

  if (max <= 0) return [-1];
  else return result;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
