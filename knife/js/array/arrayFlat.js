/**
 *
 * @desc 多维数组扁平化，并排序
 * @param {Array} arr
 * @param {Number} num
 * @return {Array}
 */
function arrayFlat(arr, num) {
    let newArr = Array.from(new Set(arr.flat(num))).sort((a, b) => {
        return  a - b
    })
    return newArr;
}

module.exports = arrayFlat;