describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`knife.arrayEqual([0, 2, 3, 4], [1, 2, 3]) should return false`, function () {
            assert.notEqual(knife.arrayEqual([0, 2, 3, 4], [1, 2, 3]), true)
        });
        it(`knife.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(knife.arrayEqual([0, 2, 3], [1, 2, 3]), true)
        });
        it('knife.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(knife.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        const arr = [8, 2, 3, 4, 7, 8]
        it(`knife.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(knife.arrayEqual(arr, arr))
        });
    });
});