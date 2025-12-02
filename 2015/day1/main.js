// file reading
const file = Bun.file("./input.txt");
const input = (await file.text()).trim();

const sample = `()())`;

/** part 1 */
void function main(input) {
  const arr = input.split("");
  let sum = 0;
  sum = arr.reduce((sum, val) => sum += val === "(" ? 1 : -1, sum);
  console.log(sum);
}(input);

/** part 2 */
void function main(input) {
  const arr = input.split("");
  let pos = 0;
  for(const [i, char] of arr.entries()){
    pos += char === "(" ? 1 : -1;
    if(pos < 0){
      console.log(i + 1);
      break;
    }
  }
}(input);