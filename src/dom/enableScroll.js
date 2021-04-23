require('./scrollEventBase.js');
/**
 * enable Scroll
 */
function enableScroll() {
    if (!window || !window.addEventListener) return;
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

module.exports = enableScroll;
