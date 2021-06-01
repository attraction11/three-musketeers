/**
 * @param {Sting} input value
 * @returns {Sting} output value
 */
function IsUrl (str) {
  var reg = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
  return reg.test(str)
}

module.exports = IsUrl;
