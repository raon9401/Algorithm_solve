/* 
  작업 완료율 : 100%
  progresses : 작업 진도
  speeds : 작업 속도
  
  [93, 30, 55]
  [1, 30 5]
  7일 3일 9일
  남은 작업시간 배열 작성 : stack
  작업일 = (100-작업진도) / 작업속도
  (100-작업진도) % 작업속도 , 남은작업시간 =+ 1
  
  queue에서 하나씩 검사 FIFO - queue 개념 사용
  shift한 값 저장 : work
  work한 값이 다음 shift할 값보다 작으면 다음 단계로 넘어감.
*/

function solution(progresses, speeds) {
  var answer = [];
  let queue = [];
  let workDay = 0;
  let work = 0;
  let workCnt = 1;

  for (let i = 0; i < progresses.length; i++) {
    workDay = Math.ceil((100 - progresses[i]) / speeds[i]);
    queue.push(workDay);
  }

  while (queue.length !== 0) {
    // work에 변동이 있으면
    if (queue[0] > work) {
      if (progresses.length !== queue.length) answer.push(workCnt);
      work = queue.shift();
      workCnt = 1;
    } else {
      // queue[0] < work
      workCnt++;
      queue.shift();
    }
  }
  answer.push(workCnt);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
console.log(solution([80, 95, 90, 99, 85, 85], [1, 1, 1, 1, 1, 1]));
