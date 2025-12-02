// file reading
const file = Bun.file("./input.txt");
const input = (await file.text()).trim();

const sample = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

/** part 1 */
void function main(input) {
  const ranges = input.split(",");
  let sum = 0;
  
  for(const range of ranges){
    const bounds = range.split("-");
    const min = +bounds[0];
    const max = +bounds[1];
    for (let i = min; i <= max; i++){
      let str = i.toString();
      if(str.slice(0, str.length / 2) === str.slice(str.length / 2)){
        sum += +i;
      }
    }
  }
  console.log(sum);
}(input);

/** part 2 */
void function main(input) {
  const ranges = input.split(",");
  let sum = 0;
  
  for(const range of ranges){
    const bounds = range.split("-");
    const min = +bounds[0];
    const max = +bounds[1];
    for (let i = min; i <= max; i++){
      let str = i.toString();
      // optimized solution
      const len = str.length;
      let bool = false;
      for (let j = 1; j <= len / 2; j++){
        if (len % j !== 0) continue;
        const sub = str.slice(0, j);
        const rep = sub.repeat(len / j);
        if(rep === str){
          bool = true;
          break;
        }
      }
      if (bool) sum += i;
      // original solution
      /*
      for (let j = 1; j <= str.length / 2; j++){
        let bool = true;
        let sub = str.slice(0, j);
        let k = j;
        while(k < str.length){
          if (sub !== str.slice(k, k + j)){
            bool = false;
            break;
          }
          k += j;
        }
        if(bool){
          sum += +i;
          break;
        }
      }
      */
    }
  }
  console.log(sum);
}(input);