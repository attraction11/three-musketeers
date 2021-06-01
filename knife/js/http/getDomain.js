/**
 * @param {Sting} input value
 * @returns {Sting} output value
 */
function getDomain(str) {
  const urlReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/
  const url=urlReg.exec(str);
  return url[0]
}

module.exports = getDomain;
