/**
 *
 * @desc 判断数据类型
 * @param {String} type
 * @param {Object} obj
 * @return {Boolean}
 */
function isType(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj) === '[object' + type+ ']'
    }
}

module.exports = isType;