function newChickenRecipe(stuffArr, choiceNum) {
  // TODO: 여기에 코드를 작성하세요.
  let result = [];

  // 상한 재료 - 0이 3개 이상인 경우.
  // stuffArr에서 각 요소를 문자열로 바꿔서 0이 3개인지 확인
  // stuff 배열 = 사용할 수 있는 재료의 모음
  let stuff = stuffArr.filter((el) => {
    // 0의 갯수를 count
    let cnt = 0;
    let str = String(el);
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0") {
        cnt++;
      }
      if (cnt >= 3) {
        return false;
      }
    }
    return true;
  });

  if (stuff.length === 0 || stuff.length < choiceNum) {
    return [];
  }

  // 사용할 수 있는 재료 정렬
  stuff.sort((a, b) => a - b);

  let permutate = function (choiceNum, cookArr) {
    if (choiceNum === 0) {
      result.push(cookArr);
      return;
    }

    for (let i = 0; i < stuff.length; i++) {
      let currentPlay = stuff[i];
      // cookArr에 중복되는 값이 있을 경우 다음 순서로 넘어감.
      if (cookArr.includes(currentPlay)) continue;

      permutate(choiceNum - 1, cookArr.concat(currentPlay));
    }
  };

  // 함수를 실행합니다.
  permutate(choiceNum, []);

  return result;
}

const output3 = newChickenRecipe([11, 1, 10, 1111111111, 10000], 4);
console.log(output3);
