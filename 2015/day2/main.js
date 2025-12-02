// file reading
const file = Bun.file("./input.txt");
const input = (await file.text()).trim();

const sample = `2x3x4`;

/** part 1 */
void function main(input) {
  const lines = input.split("\n");
  let sum = 0;
  lines.forEach(line => {
    const nums = line.split("x");
    const l = +nums[0], w = +nums[1], h = +nums[2];
    const arr = [l * w, l * h, w * h];
    const surface_area = 2 * l * w + 2 * w * h + 2 * l * h;
    sum += arr.sort((a, b) => a - b)[0] + surface_area;
  });
  console.log(sum);
}(input);

/** part 2 */
void function main(input) {
  const lines = input.split("\n");
  let sum = 0;
  lines.forEach(line => {
    const nums = line.split("x");
    const l = +nums[0], w = +nums[1], h = +nums[2];
    const arr = [2 * l + 2 * w, 2 * l + 2 * h, 2 * w + 2 * h];
    const vol = l * w * h;
    sum += arr.sort((a, b) => a - b)[0] + vol;
  });
  console.log(sum);
}(input);