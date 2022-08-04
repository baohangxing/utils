/**
 * add class to HTMLElement
 */
function addClass(ele: HTMLElement, cls: string) {
  if (ele && !hasClass(ele, cls)) {
    ele.className += ' ' + cls;
  }
}

/**
 * Determine whether HTMLElement has class
 */
function hasClass(ele: HTMLElement, cls: string): boolean {
  if (!ele || ele.className === undefined) return false;
  return new RegExp('(\\s|^)' + cls + '(\\s|$)').test(ele.className);
}

/**
 * remove class from HTMLElement
 */
function removeClass(ele: HTMLElement, cls: string) {
  if (ele && hasClass(ele, cls)) {
    let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}

export { addClass, hasClass, removeClass };
