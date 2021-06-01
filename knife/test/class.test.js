describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`knife.addClass($ele, 'test') should return true`, function () {
            knife.addClass($ele, 'test')
            assert(knife.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            knife.addClass($ele, 'test')
        })
        it(`knife.hasClass($ele, 'test') should return true`, function () {
            assert(knife.hasClass($ele, 'test'))
        });
        it(`knife.hasClass($ele, 'test') should return false`, function () {
            assert(!knife.hasClass($ele, 'test2'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            knife.addClass($ele, 'test')
        })
        it(`knife.removeClass($ele, 'test') should return false`, function () {
            knife.removeClass($ele, 'test')
            assert.notEqual(knife.hasClass($ele, 'test'), true)
        });
        it(`knife.removeClass($ele, 'test') should return false`, function () {
            knife.removeClass($ele, 'test')
            assert.notEqual(knife.hasClass($ele, 'test'), true)
            knife.addClass($ele, 'newTest')
            assert(knife.hasClass($ele, 'newTest'))
            knife.removeClass($ele, 'newTest')
            assert.notEqual(knife.hasClass($ele, 'newTest'), true)
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});