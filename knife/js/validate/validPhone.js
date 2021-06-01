function validPhone(value) {
    return value && value.trim().length === 11 && /^[1-9][2-9]\d{9}$/.test(value.trim());
}

module.exports = validPhone;
