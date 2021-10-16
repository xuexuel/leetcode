/*
 * @lc app=leetcode.cn id=535 lang=javascript
 *
 * [535] TinyURL 的加密与解密
 */

// @lc code=start


let map = {};
let str = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function getRandom(str) {
  let res = "";
  for (let i = 0; i < 6; i++) {
    res += str[Math.floor(Math.random() * 61)];
  }
  return res;
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  let result = getRandom(str);
  while (map[result]) {
    result = getRandom(str)
  }
  map[result] = longUrl;
  return "http://tinyurl.com/" + result;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  let key = shortUrl.slice(-6);
  return map[key];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
// @lc code=end

