// file reading
const file = Bun.file("./input.txt");
const input = (await file.text()).trim();

const sample =`987654321111111
811111111111119
234234234234278
818181911112111`;

/** part 1 */
void function main(input) {
  const lines = input.split("\n");
  let sum = 0;
  for(const bank of lines){
    const batteries = bank.split("").map(Number);
    const high = batteries.entries().toArray().sort((a, b) => b[1] - a[1])[0];
    let num = batteries.slice(high[0] + 1).entries().toArray().sort((a, b) => b[1] - a[1])[0];
    if (num) num[0] += high[0] + 1;
    const low = !num ? batteries.slice(0, high[0]).entries().toArray().sort((a, b) => b[1] - a[1])[0] : num;
    const val = high[0] <= low[0] ? high[1].toString() + low[1].toString() : low[1].toString() + high[1].toString();
    sum += +val;
  }
  console.log(sum);
}(input);

/** part 2 */
void function main(input) {
  const lines = input.split("\n");
  let sum = 0;
  for(const bank of lines){
    let batteries = bank.split("").map(Number)
    let len = batteries.length;
    // there's no math
    // there's no logic
    // there's no hope
    // this is brute force
    // day 3 and we are already brute forcing solutions
    // waited a full 30s for this to run
    // i tried for two hours to figure it out
    // i could not
    // sue me
    // weighted avaerages, divide and conquer, you name it
    // ugh
    for (let i = 0; i < len - 12; i++){
      let max = 0, index = 0;
      for (let j = 0; j < batteries.length; j++){
        let copy = structuredClone(batteries);
        copy.splice(j, 1);
        let val = +copy.join("");
        if(val > max){
          max = val;
          index = j;
        }
      }
      batteries.splice(index, 1);
    }
    let val = +batteries.join("");
    sum += val;
  }
  console.log(sum);
}(input);