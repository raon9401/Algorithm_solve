let input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));

let [A, B] = input;
if (A > B) {
  console.log(`>`);
} else if (A < B) {
  console.log(`<`);
} else if (A === B) {
  console.log(`==`);
}
