/**
 *
 * @desc Determine whether two arrays are equal
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
function arrayEqual(arr1, arr2) {
    if (!arr1 || !arr2) return false;
    if (arr1 === arr2) return true;
    if (arr1.length !== arr2.length) return false;
    var len = arr1.length;
    for (var i = 0; i < len; ++i) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

module.exports = arrayEqual;
