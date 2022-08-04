import { isArraysEqual } from './array/index';
import { addClass, hasClass, removeClass } from './class/index';
import { getCookie, setCookie, removeCookie } from './cookie/index';
import { getExplorerType, getOSType } from './device';
import { getKeyName } from './keycode';
import { isEmptyObject, deepClone } from './object';
import { randomColor, randomNum } from './random';
import { digitUppercase } from './string';
import { isSupportWebP } from './support';
import { parseQueryString, stringfyQueryString } from './url';

export {
  isArraysEqual,
  addClass,
  hasClass,
  removeClass,
  getCookie,
  setCookie,
  removeCookie,
  getExplorerType,
  getOSType,
  getKeyName,
  isEmptyObject,
  deepClone,
  randomColor,
  randomNum,
  digitUppercase,
  isSupportWebP,
  parseQueryString,
  stringfyQueryString,
};

const utils = {
  isArraysEqual,
  addClass,
  hasClass,
  removeClass,
  getCookie,
  setCookie,
  removeCookie,
  getExplorerType,
  getOSType,
  getKeyName,
  isEmptyObject,
  deepClone,
  randomColor,
  randomNum,
  digitUppercase,
  isSupportWebP,
  parseQueryString,
  stringfyQueryString,
};

export default utils;
