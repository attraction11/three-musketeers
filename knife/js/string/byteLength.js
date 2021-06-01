/**
 * @param {Sting} input value
 * @returns {number} output value
 */
function byteLength(str) {
  if (str && str.length > 0){
    var realLength = 0
    var len = str.replace(/(^\s+)|(\s+$)/g, '')
    var charCode = -1
    for (var i = 0; i < len.length; i++) {
      charCode = len.charCodeAt(i)
      if (charCode > 0 && charCode <= 128) realLength += 1
      else realLength += 2
    }
    return realLength
  }
}

module.exports = trim;
