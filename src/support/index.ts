/**
 * 判断浏览器是否支持webP格式图片
 */
function isSupportWebP(): boolean {
  return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

export { isSupportWebP };
