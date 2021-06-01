describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`knife.getKeyName(13) should return "Enter"`, function () {
            assert(knife.getKeyName(13) === 'Enter')
        });
        const keycode = 10000
        it(`knife.getKeyName(${keycode}) should return ''`, function () {
            assert(knife.getKeyName(keycode) === '')
        });
    });

});