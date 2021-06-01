describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            knife.setCookie('test', 'getTestValue')
        })
        it(`knife.getCookie('test', 'getTestValue') should return true`, function () {
            assert(knife.getCookie('test') === 'getTestValue')
        })
        it(`knife.getCookie('empty', '') should return true`, function () {
            assert(knife.getCookie('empty') === '')
        })
        after(function () {
            knife.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            knife.setCookie('test', 'removeTestValue')
        })
        it(`knife.removeCookie('test') should return false`, function () {
            knife.removeCookie('test')
            assert.notEqual(knife.getCookie('test') === 'removeTestValue', true)
        })
    })

    describe('#setCookie()', function () {
        it(`knife.getCookie('test', 'setCookie') should return true`, function () {
            knife.setCookie('test', 'setCookie')
            assert(knife.getCookie('test') === 'setCookie')
        })
        after(function () {
            knife.removeCookie('test')
        })
    })
})