/**
 * @desc Get the distance of the scroll bar from the top
 */
function getScrollTop() {
    if (!document) return 0;
    return (
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop
    );
}

module.exports = getScrollTop;
