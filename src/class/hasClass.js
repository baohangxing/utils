/**
 * @desc Determine whether HTMLElement has class
 * @param {HTMLElement} ele
 * @param {String} cls
 * @return {Boolean}
 */
function hasClass(ele, cls) {
    if (!ele || ele.className === undefined) return false;
    return new RegExp('(\\s|^)' + cls + '(\\s|$)').test(ele.className);
}

module.exports = hasClass;
