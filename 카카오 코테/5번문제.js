/*
    UPDATE X Y 변경값 - x,y 에 변경값 입력
    UPDATE 변경값1 변경값2 - 변경값1을 변경값2로 변경
    
    MERGE x1 y1 x2 y2 - 병합할 경우 값을 가진 위치의 값을 가짐
                        둘다 값이 있으면 x1,y1의 값으로 통일
    
    UNMERGE X Y - 셀의 병합 해제 
                  병합 해제전 셀이 값을 가지고 있으면 X,Y 위치의 셀이 그 값을 가지게됨


*/

function solution(commands) {
  var answer = [];
  // command[i][0] : 명령어
  let command = commands.map((el) => el.split(" "));
  let obj = [];
  let state = { value: "", index: "", merge: { value: "", isMerge: false } };
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      state.index = `${i},${j}`;
      obj.push(Object.assign({}, state));
    }
  }
  for (let i = 0; i < command.length; i++) {
    if (command[i][0] === "UPDATE") {
      //   console.log("UPDATE");
      if (command[i].length === 3) {
        let change = obj.findIndex((el) => el.value === command[i][1]);
        obj[change].value = command[i][2];
      } else if (command[i].length === 4) {
        let change = obj.findIndex(
          (el) => el.index === `${command[i][1]},${command[i][2]}`
        );
        obj[change].value = command[i][3];
      }
    }
    if (command[i][0] === "MERGE") {
      //   console.log("MERGE");
      let start = obj.findIndex(
        (el) => el.index === `${command[i][1]},${command[i][2]}`
      );
      let end = obj.findIndex(
        (el) => el.index === `${command[i][3]},${command[i][4]}`
      );
      obj[
        start
      ].merge.isMerge = `${command[i][1]},${command[i][2]},${command[i][3]},${command[i][4]},`;
      obj[
        end
      ].merge.isMerge = `${command[i][1]},${command[i][2]},${command[i][3]},${command[i][4]},`;
      if (obj[end].value === "") {
        obj[start].merge.value = `${obj[start].value}`;
        obj[end].merge.value = `${obj[start].value}`;
      } else {
        obj[start].merge.value = `${obj[start].value}`;
        obj[end].merge.value = `${obj[start].value}`;
      }
      // console.log(obj[start], obj[end]);
    }
    if (command[i][0] === "UNMERGE") {
      //   console.log("UNMERGE");
    }
    if (command[i][0] === "PRINT") {
      //   console.log("PRINT");
      let change = obj.findIndex(
        (el) => el.index === `${command[i][1]},${command[i][2]}`
      );
      obj[change].value ? answer.push(obj[change].value) : answer.push("EMPTY");
    }
  }

  return answer;
}

console.log(
  solution([
    "UPDATE 1 1 menu",
    "UPDATE 1 2 category",
    "UPDATE 2 1 bibimbap",
    "UPDATE 2 2 korean",
    "UPDATE 2 3 rice",
    "UPDATE 3 1 ramyeon",
    "UPDATE 3 2 korean",
    "UPDATE 3 3 noodle",
    "UPDATE 3 4 instant",
    "UPDATE 4 1 pasta",
    "UPDATE 4 2 italian",
    "UPDATE 4 3 noodle",
    "MERGE 1 2 1 3",
    "MERGE 1 3 1 4",
    "UPDATE korean hansik",
    "UPDATE 1 3 group",
    "UNMERGE 1 4",
    "PRINT 1 3",
    "PRINT 1 4",
  ])
);
