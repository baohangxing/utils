var hasClass = require('./hasClass');

/**
 *
 * @desc   add class to HTMLElement
 * @param  {HTMLElement} ele
 * @param  {String} cls
 */
function addClass(ele, cls) {
    if (ele && !hasClass(ele, cls)) {
        ele.className += ' ' + cls;
    }
}

module.exports = addClass;
