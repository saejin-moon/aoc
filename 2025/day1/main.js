// file reading
const file = Bun.file("./input.txt");
const input = (await file.text()).trim();

const sample = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

/** part 1 **/
void function main(input) {
  let ptr = 50, count = 0;
  for (const line of input.split("\n")) {
    let sign = line[0] === "L" ? -1 : 1;
    let increment = line.slice(1);
    for (let i = increment; i--;) {
      ptr += sign;
      if (ptr < 0) ptr = 99;
      else if (ptr > 99) ptr = 0;
    }
    if (ptr === 0) count++;
  }
  console.log(ptr, count);
}(input);

/** part 2 */
void function main(input) {
  let ptr = 50, count = 0;
  for (const line of input.split("\n")) {
    let sign = line[0] === "L" ? -1 : 1;
    let increment = line.slice(1);
    for (let i = increment; i--;) {
      ptr += sign;
      if (ptr === 0) count++;
      else if (ptr < 0) ptr = 99;
      else if (ptr > 99) {
        ptr = 0;
        count++;
      }
    }
  }

  console.log(ptr, count);
}(input);