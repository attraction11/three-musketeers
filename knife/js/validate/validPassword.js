/* 不得包含各种特殊字符(特殊符号、emoji、中文) */
function validPassword (str) {
    const regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im,
        regEmoji = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/im,
        regZh = /[\u4e00-\u9fa5]/im;
    return !(regCn.test(str) || regEmoji.test(str) || regZh.test(str))
}

module.exports = validPassword;
