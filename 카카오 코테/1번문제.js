/*
    A약관 : 6달
    B약관 : 12달
    C약관 : 3달
    today : 오늘 날짜를 의미 - 개인정보 수집 일자
            YYYY.MM.DD 형식
    term : 약관의 유효기간을 담은 1차원 문자열
    privacies : 개인정보를 담은 1차원 문자열 배열
                privacies[i]는 i+1번 개인정보의 수집일자와 약관 종류
                날짜 약관 종류  -> 공백으로 나눈 문자
                - split
    출력 : 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 리턴

    모든 달은 28일까지 있다고 가정한다.
    1년 : 336일
    1달 : 28일
*/

function solution(today, terms, privacies) {
  var answer = [];
  let month = 29;

  let newToday = today.split(".").map((el) => Number(el));
  console.log(newToday);
  // type[i][0] : 약관 타입, temr[i][1] : 약관 기간
  let type = terms.map((el) => el.split(" "));
  for (let i = 0; i < type.length; i++) {
    type[i][1] = Number(type[i][1]) * month;
  }

  // newPrivacies[i][0] : 날짜 정보;
  // newPrivacies[i][1] : 약관 정보;
  let newPrivacies = privacies.map((el) => el.split(" "));
  for (let i = 0; i < privacies.length; i++) {
    // info[0] = yyyy
    // info[1] = mm
    // info[2] = day
    newPrivacies[i][0] = newPrivacies[i][0].split(".").map((el) => Number(el));
  }

  // 약관에 따라 정리
  for (let i = 0; i < type.length; i++) {
    for (let j = 0; j < newPrivacies.length; j++) {
      if (type[i][0] === newPrivacies[j][1]) {
        newPrivacies[j][0][2] += type[i][1];
        if (newPrivacies[j][0][2] > 28) {
          newPrivacies[j][0][1] += Math.floor(newPrivacies[j][0][2] / month);
          newPrivacies[j][0][2] = (newPrivacies[j][0][2] - 1) % month;
          if (newPrivacies[j][0][2] === 0) {
            newPrivacies[j][0][1] -= 1;
            newPrivacies[j][0][2] = 28;
          }
        }
        if (newPrivacies[j][0][1] > 12) {
          newPrivacies[j][0][0] += Math.floor(newPrivacies[j][0][1] / 12);

          newPrivacies[j][0][1] = newPrivacies[j][0][1] % 12;
          if (newPrivacies[j][0][1] === 0) {
            newPrivacies[j][0][1] = 1;
          }
        }
        // today 보다 날짜가 낮으면  ok
        if (newToday[0] > newPrivacies[j][0][0]) {
          answer.push(j + 1);
        } else if (newToday[0] === newPrivacies[j][0][0]) {
          if (newToday[1] > newPrivacies[j][0][1]) {
            answer.push(j + 1);
          } else if (newToday[1] === newPrivacies[j][0][1]) {
            if (newToday[2] > newPrivacies[j][0][2]) {
              answer.push(j + 1);
            }
          }
        }
      }
    }
  }

  console.log(newPrivacies);
  return answer.sort((a, b) => a - b);
}

// console.log(
//   solution(
//     "2022.05.19",
//     ["A 6", "B 12", "C 3"],
//     ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
//   )
// );
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);
