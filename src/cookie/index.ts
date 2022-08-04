/**
 * get Cookie value by key
 */
function getCookie(name: string) {
  if (!document || !document.cookie) return '';
  let arr = document.cookie.replace(/\s/g, '').split(';');
  for (let x of arr) {
    let tempArr = x.split('=');
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return '';
}

/**
 * remove Cookie by name
 */
function removeCookie(name: string) {
  setCookie(name, '1', -1);
}

/**
 * set Cookie
 */
function setCookie(name: string, value: string, days: number) {
  if (!document || !document.cookie) return '';
  let date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + date;
}

export { getCookie, setCookie, removeCookie };
