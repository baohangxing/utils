var hasClass = require('./hasClass');

/**
 *
 * @desc remove class from HTMLElement
 * @param {HTMLElement} ele
 * @param {String} cls
 */
function removeClass(ele, cls) {
    if (ele && hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}
module.exports = removeClass;
