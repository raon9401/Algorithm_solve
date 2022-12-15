/*
    https://www.acmicpc.net/problem/9655
*/

const input = require("fs")
  .readFileSync(__dirname + "/9655.txt")
  .toString()
  .trim();

if (input % 2 === 0) {
  console.log("CY");
} else {
  console.log("SK");
}
