function validFilename (value) {
    return value.replace(/[^\u4e00-\u9fa5\sa-zA-Z0-9]+/, '')
}

module.exports = validFilename;
