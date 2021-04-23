/**
 *
 * @desc  Get the position of an element from the document (document), similar to offset() in jQ
 * @param {HTMLElement} ele
 * @returns { {left: number, top: number} }
 */
function offset(ele) {
    var pos = {
        left: 0,
        top: 0,
    };
    while (ele) {
        pos.left += ele.offsetLeft;
        pos.top += ele.offsetTop;
        ele = ele.offsetParent;
    }
    return pos;
}

module.exports = offset;
