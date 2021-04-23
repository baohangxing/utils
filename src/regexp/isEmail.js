/**
 *
 * @desc   Determine whether str is a email
 * @param  {String}  str
 * @return {Boolean}
 */
function isEmail(str) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        str
    );
}

module.exports = isEmail;
