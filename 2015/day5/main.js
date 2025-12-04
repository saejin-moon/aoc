// file reading
const file = Bun.file("./input.txt");
const input = (await file.text()).trim();

const sample = `ugknbfddgicrmopn
aaa
jchzalrnumimnmhp
haegwjzuvuyypxyu
dvszwmarrgswjxmb`;

/** part 1 */
void function main(input) {
  console.log(input.split("\n").reduce((a, line) => a + +(!(/(ab|cd|pq|xy)/).test(line) && line.matchAll(/[aeiou]/g).toArray().length >= 3 && (/(\w)\1/).test(line)), 0));
}(input);

/** part 2 */
void function main(input) {
  // regex stolen from dominic rocco's solution found at https://github.com/jD2R/AoC/blob/788ae1602c31fca65a14445d3b2e87971f4c5d11/2015/Day5/solution.js#L9
  console.log(input.split("\n").reduce((a, line) => a + +((/(\w)\w\1/).test(line) && (/^.*?([a-z]{2,}).*?(\1).*$/).test(line)), 0));
}(input);