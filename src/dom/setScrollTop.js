/**
 *
 * @desc Set the distance between the scroll bar and the top
 * @param {Number} value
 */
function setScrollTop(value) {
    if (!window.scrollTo) return 0;
    window.scrollTo(0, value);
    return value;
}

module.exports = setScrollTop;
