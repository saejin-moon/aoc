// file reading
const file = Bun.file("./input.txt");
const input = (await file.text()).trim();

const sample = `^v^v^v^v^v`;

/** part 1 */
void function main(input) {
  const chars = input.split("");
  const set = new Set();
  const pos = { x: 0, y: 0 };
  set.add(JSON.stringify(pos));
  for(const char of chars){
    switch(char){
      case "^":
        pos.y--;
        break;
      case "v":
        pos.y++;
        break;
      case ">":
        pos.x++;
        break;
      case "<":
        pos.x--;
        break;
    }
    set.add(JSON.stringify(pos));
  }
  console.log(set.size);
}(input);

/** part 2 */
void function main(input) {
  const chars = input.split("");
  const set = new Set();
  let santa = { x: 0, y: 0 };
  let robo = { x: 0, y: 0 };
  set.add(JSON.stringify(santa));
  
  function move(o, char){
    switch(char){
      case "^":
        o.y--;
        break;
      case "v":
        o.y++;
        break;
      case ">":
        o.x++;
        break;
      case "<":
        o.x--;
        break;
    }
    return o;
  }
  
  for (let i = 0; i < chars.length; i += 2){
    const santa_char = chars[i];
    const robo_char = chars[i + 1];
    santa = move(santa, santa_char);
    robo = move(robo, robo_char);
    set.add(JSON.stringify(santa));
    set.add(JSON.stringify(robo));
  }
  console.log(set.size);
}(input);