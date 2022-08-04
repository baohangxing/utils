/**
 * get a random Color
 */
function randomColor(): string {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
}

/**
 * get a random Number
 */
function randomNum(min: number, max: number) {
  let minV = Math.ceil(min);
  let maxV = Math.floor(max);
  return Math.floor(Math.random() * (maxV - minV + 1)) + minV;
}

export { randomColor, randomNum };
