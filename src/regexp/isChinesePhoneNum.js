/**
 *
 * @desc   determain whether str is a Chinese num
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isChinesePhoneNum(str) {
    return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str);
}

module.exports = isChinesePhoneNum;
