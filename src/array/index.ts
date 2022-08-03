/**
 * Determine whether two arrays are equal
 */
function isArraysEqual(arr1: unknown[], arr2: unknown[]) {
  if (!arr1 || !arr2) return false;
  if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;
  let len = arr1.length;
  for (let i = 0; i < len; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

export { isArraysEqual };
