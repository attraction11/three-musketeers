describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual knife.deepClone(null) should return true`, function () {
            let person = null
            assert.deepEqual(person, knife.deepClone(person))
        });

        it(`person deepEqual knife.deepClone('SlaneYang') should return true`, function () {
            let person = 'SlaneYang'
            assert.deepEqual(person, knife.deepClone(person))
        });

        it(`person deepEqual knife.deepClone(new Date()) should return true`, function () {
            let date = new Date()
            assert.deepEqual(date, knife.deepClone(date))
        });

        it(`person deepEqual knife.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, knife.deepClone(person))
        });

        it(`person === knife.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, knife.deepClone(person), true)
        });
    });

    describe('#isEmptyObject()', function () {
        it(`knife.isEmptyObject({}) should return true`, function () {
            assert(knife.deepClone({}))
        });

        it(`knife.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(knife.isEmptyObject({
                one: 1
            }), true)
        });

        it(`knife.isEmptyObject([]) should return false`, function () {
            assert.notEqual(knife.isEmptyObject([]), true)
        });
    });
})