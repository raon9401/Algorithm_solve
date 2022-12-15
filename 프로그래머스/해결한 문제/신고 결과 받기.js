// id_list : 유저 ID 리스트
// report : ['이용자id 신고한id']
// k : k번 이상 신고당하면 게시판 이용 정지
// 이용이 정지 되면 메일 발송
// 출력값 : 각 유저별로 처리결과를 받은 횟수
// 한 유저당 한번만 신고 가능.

function solution(id_list, report, k) {
  var answer = {}; // 메일을 받을 유저 : 받을 횟수
  let userMap = {}; // 신고 당한 유저 : [신고한 유저]
  report = [...new Set(report)]; // 한명이 다른 한명을 한번만 신고 가능. 중복 제거
  for (let el of id_list) {
    userMap[el] = []; // 배열로 초기화
    answer[el] = 0; // 0으로 초기화
  }
  for (let el of report) {
    el = el.split(" "); // [신고한 유저, 신고 당한 유저]로 만들기
    userMap[el[1]].push(el[0]);
  }
  for (let el of id_list) {
    if (userMap[el].length >= k) {
      // 신고당한 횟수가 k 이상이면
      for (let j = 0; j < userMap[el].length; j++) {
        // 메일 받을 사람들을 찾아 횟수 증가
        answer[userMap[el][j]]++;
      }
    }
  }

  return Object.values(answer);
}

// // Map을 사용한 풀이 - get, set
// function solution(id_list, report, k) {
//   let reports = [...new Set(report)].map(a=>{return a.split(' ')});
//   let counts = new Map();
//   for (const bad of reports){
//       counts.set(bad[1],counts.get(bad[1])+1||1)
//   }
//   let good = new Map();
//   for(const report of reports){
//       if(counts.get(report[1])>=k){
//           good.set(report[0],good.get(report[0])+1||1)
//       }
//   }
//   let answer = id_list.map(a=>good.get(a)||0)
//   return answer;
// }

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
