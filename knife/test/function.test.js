describe('Function API:', function () {
    describe('#debounce()', function () {
        const debounce = knife.debounce
        it(`knife.debounce(200,function(){return true}) should return true`, function (done) {
            let num = 0
            let interval = null
            let debounced = debounce(500, function () {
                num++
                assert(num === 1)
                done()
                return true
            })
            interval = setInterval(function () {
                debounced()
            }, 20)
            setTimeout(function () {
                clearInterval(interval)
            }, 800)
        })

        it(`knife.debounce(200,true,function(){return true}) should return true`, function (done) {
            let num = 0
            let interval = null
            let debounced = debounce(500, function () {
                num++
                assert(num === 1)
                done()
                return true
            })
            interval = setInterval(function () {
                debounced()
            }, 20)
            setTimeout(function () {
                clearInterval(interval)
            }, 800)
        })
    });

    describe('#throttle()', function () {
        const throttle = knife.throttle

        it(`knife.throttle(200, function(){return true}) should return true`, function (done) {
            let num = 0
            let interval = null
            let throttled = throttle(200, function () {
                num++
                return true
            })
            interval = setInterval(function () {
                throttled()
            }, 20)
            setTimeout(function () {
                assert(num === Math.floor(805 / 200))
                done()
                clearInterval(interval)
            }, 805)
        })

        it(`knife.throttle(200, function(){return true}) should return true`, function (done) {
            let num = 0
            let interval = null
            let throttled = throttle(200, true, function () {
                num++
                return true
            })
            interval = setInterval(function () {
                throttled()
            }, 20)
            setTimeout(function () {
                assert(num === Math.floor(805 / 200))
                done()
                clearInterval(interval)
            }, 805)
        })
    });

});