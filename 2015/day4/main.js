import md5 from "md5";

// bruh
const input = "yzbqklnj";
const sample = "abcdef";

/** part 1 */
void function main(input) {
  let i = 0, str = "";
  while (true) {
    str = md5(input + i++);
    if ((/^00000/).test(str)) break;
  }
  console.log(i - 1);
}(input);

/** part 2 */
void function main(input) {
  let i = 0, str = "";
  while (true) {
    str = md5(input + i++);
    if ((/^000000/).test(str)) break;
  }
  console.log(i - 1);
}(input);
