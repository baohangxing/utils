var setCookie = require('./setCookie');
/**
 *
 * @desc remove Cookie by name
 * @param  {String} name
 */
function removeCookie(name) {
    setCookie(name, '1', -1);
}

module.exports = removeCookie;
