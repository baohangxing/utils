/**
 * 判断`obj`是否为空
 */
function isEmptyObject(obj: unknown) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
  return !Object.keys(obj).length;
}

/**
 * deep Clone，suport common data types
 */
function deepClone(values: any) {
  let copy: any;

  // Handle the 3 simple types, and null or undefined
  if (values === null || values === undefined || 'object' !== typeof values) return values;

  // Handle Date
  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  }

  // Handle Array
  if (values instanceof Array) {
    copy = [];
    for (let i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }
    return copy;
  }

  // Handle Object
  if (values instanceof Object) {
    copy = {};
    for (let attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy values! Its type isn't supported.");
}

export { isEmptyObject, deepClone };
