/**
 *
 * @desc  set Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
function setCookie(name, value, days) {
    if (!document || !document.cookie) return '';
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}

module.exports = setCookie;
