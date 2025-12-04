// file reading
const file = Bun.file("./input.txt");
const input = (await file.text()).trim();

const sample = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

/** part 1 */
void function main(input) {
  const options = [
    {
      x: 0,
      y: 1
    },
    {
      x: 0,
      y: -1
    },
    {
      x: 1,
      y: 0
    },
    {
      x: -1,
      y: 0
    },
    {
      x: -1,
      y: 1
    },
    {
      x: -1,
      y: -1
    },
    {
      x: 1,
      y: -1
    },
    {
      x: 1,
      y: 1
    }
  ];
  
  const lines = input.split("\n").entries().toArray();
  const cols = lines.length;
  let sum = 0;
  
  for(const [y, line] of lines){
    const chars = line.split("").entries();
    const rows = chars.length;
    for(const [x, char] of chars){
      if(char === "@"){
        let count = 0;
        for(const option of options){
          let pos = { x: x + option.x, y: y + option.y };
          if (pos.x < 0 || pos.x >= rows || pos.y < 0 || pos.y >= cols) continue;
          if (lines[pos.y][1][pos.x] === "@") count++;
        }
        if (count < 4) sum++;
      }
    }
  }
  console.log(sum);
}(input);

/** part 2 */
void function main(input) {
  const options = [
    {
      x: 0,
      y: 1
    },
    {
      x: 0,
      y: -1
    },
    {
      x: 1,
      y: 0
    },
    {
      x: -1,
      y: 0
    },
    {
      x: -1,
      y: 1
    },
    {
      x: -1,
      y: -1
    },
    {
      x: 1,
      y: -1
    },
    {
      x: 1,
      y: 1
    }
  ];
  
  let lines = [...input.split("\n")];
  const cols = lines.length;
  let sum = 0;
  
  while (true) {
    let stash = sum;
    const positions = [];
    for (const [y, line] of lines.entries()) {
      const chars = line.split("");
      const rows = chars.length;
      for (const [x, char] of chars.entries()) {
        if (char === "@") {
          let count = 0;
          for (const option of options) {
            let pos = { x: x + option.x, y: y + option.y };
            if (pos.x < 0 || pos.x >= rows || pos.y < 0 || pos.y >= cols) continue;
            if (lines[pos.y][pos.x] === "@") count++;
          }
          if (count < 4) {
            positions.push({ x: x, y: y });
          }
        }
      }
    }
    for(const pos of positions){
      lines[pos.y] = lines[pos.y].slice(0, pos.x) + "x" + lines[pos.y].slice(pos.x + 1);
    }
    sum += positions.length;
    if (stash === sum) break;
  }
  
  console.log(sum);
}(input);