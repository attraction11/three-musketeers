/**
 *
 * @desc 去除空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格
 * @param {String} str
 * @param {Number} type
 * @return {String}
 */
function trim(str, type) {
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
}

module.exports = trim;