/**
 * parse query string to object
 * @param url  default: window.location.href
 */
function parseQueryString(url = window.location.href) {
  if (url.indexOf('?') === -1) {
    return {};
  }
  let search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
  if (search === '') {
    return {};
  }
  const searchs = search.split('&');
  let query: Record<string, string> = {};

  for (let x of searchs) {
    let pair = x.split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

type QueryValue = string | number | boolean | string[] | number[] | boolean[];

/**
 * stringfy query string
 * @param  {Object} obj
 * @return {String}
 */
function stringfyQueryString(obj: Record<string, QueryValue>): string {
  if (!obj) return '';
  let pairs: string[] = [];

  // eslint-disable-next-line guard-for-in
  for (let key in obj) {
    let value = obj[key];

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; ++i) {
        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
      }
      continue;
    } else {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  }

  return pairs.join('&');
}

export { parseQueryString, stringfyQueryString };
