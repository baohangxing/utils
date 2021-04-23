require('./scrollEventBase.js');

/**
 * disable Scroll
 */
function disableScroll() {
    if (!window || !window.addEventListener) return;
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

module.exports = disableScroll;
