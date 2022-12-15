let input = require("fs")
  .readFileSync("/home/jhc/algorithm/백준/그리디/1439.txt")
  .toString()
  .trim();

console.log(input);

/*
    바뀔때마다 카운트.
    바뀌는 방법은 2가지 -> 바뀐 횟수 / 2
*/

const greedy = (str) => {
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      cnt++;
    }
  }
  return Math.floor(cnt / 2);
};

console.log(greedy(input));
