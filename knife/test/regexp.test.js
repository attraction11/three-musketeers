describe('Regexp API:', function () {

	describe('#isColor()', function() {
		it('knife.isColor("#acf") should return true ', function() {
			assert(knife.isColor("#acf"))
		});
		it('knife.isColor("#aaccff") should return true ', function() {
			assert(knife.isColor("#aaccff"))
		});
		it('knife.isColor("acf") should return false ', function() {
			assert(!knife.isColor("acf"))
		});
		it('knife.isColor("aaccff") should return false ', function() {
			assert(!knife.isColor("aaccff"))
		});
		it('knife.isColor("rgb(0,0,0,1)") should return false ', function() {
			assert(!knife.isColor("rgb(0,0,0,1)"))
		});
		it('knife.isColor("rgb(0,0,0,)") should return false ', function() {
			assert(!knife.isColor("rgb(0,0,0,)"))
		});
		it('knife.isColor("rgb(255,255,256)") should return false ', function() {
			assert(!knife.isColor("rgb(255,255,256)"))
		});
		it('knife.isColor("rgb(255,256,255)") should return false ', function() {
			assert(!knife.isColor("rgb(255,256,255)"))
		});
		it('knife.isColor("rgb(256,255,255)") should return false ', function() {
			assert(!knife.isColor("rgb(256,255,255)"))
		});
		it('knife.isColor("rgb(1,1,-1)") should return false ', function() {
			assert(!knife.isColor("rgb(1,1,-1)"))
		});
		it('knife.isColor("rgb(1,-1,1)") should return false ', function() {
			assert(!knife.isColor("rgb(1,-1,1)"))
		});
		it('knife.isColor("rgb(-1,1,1)") should return false ', function() {
			assert(!knife.isColor("rgb(-1,1,1)"))
		});
		it('knife.isColor("rgb(1,1,1.1)") should return false ', function() {
			assert(!knife.isColor("rgb(1,1,1.1)"))
		});
		it('knife.isColor("rgb(1,1.1,1)") should return false ', function() {
			assert(!knife.isColor("rgb(1,1.1,1)"))
		});
		it('knife.isColor("rgb(1.1,1,1)") should return false ', function() {
			assert(!knife.isColor("rgb(1.1,1,1)"))
		});
		it('knife.isColor("rgb(0,0,0)") should return true ', function() {
			assert(knife.isColor("rgb(0,0,0)"))
		});
		it('knife.isColor("rgb(255,255,255)") should return true ', function() {
			assert(knife.isColor("rgb(255,255,255)"))
		});
		it('knife.isColor("rgba(-1,0,0,1)") should return false ', function() {
			assert(!knife.isColor("rgba(-1,0,0,1)"))
		});
		it('knife.isColor("rgba(0,-1,0,1)") should return false ', function() {
			assert(!knife.isColor("rgba(0,-1,0,1)"))
		});
		it('knife.isColor("rgba(0,0,-1,1)") should return false ', function() {
			assert(!knife.isColor("rgba(0,0,-1,1)"))
		});
		it('knife.isColor("rgba(0,0,0,-1)") should return false ', function() {
			assert(!knife.isColor("rgba(0,0,0,-1)"))
		});
		it('knife.isColor("rgba(256,0,0,1)") should return false ', function() {
			assert(!knife.isColor("rgba(256,0,0,1)"))
		});
		it('knife.isColor("rgba(0,256,0,1)") should return false ', function() {
			assert(!knife.isColor("rgba(0,256,0,1)"))
		});
		it('knife.isColor("rgba(0,0,256,1)") should return false ', function() {
			assert(!knife.isColor("rgba(0,0,256,1)"))
		});
		it('knife.isColor("rgba(-1,0,0,1)") should return false ', function() {
			assert(!knife.isColor("rgba(-1,0,0,1)"))
		});
		it('knife.isColor("rgba(0,-1,0,1)") should return false ', function() {
			assert(!knife.isColor("rgba(0,-1,0,1)"))
		});
		it('knife.isColor("rgba(0,0,-1,1)") should return false ', function() {
			assert(!knife.isColor("rgba(0,0,-1,1)"))
		});
		it('knife.isColor("rgba(1.1,0,0,1)") should return false ', function() {
			assert(!knife.isColor("rgba(1.1,0,0,1)"))
		});
		it('knife.isColor("rgba(0,1.1,0,1)") should return false ', function() {
			assert(!knife.isColor("rgba(0,1.1,0,1)"))
		});
		it('knife.isColor("rgba(0,0,1.1,1)") should return false ', function() {
			assert(!knife.isColor("rgba(0,0,1.1,1)"))
		});
		it('knife.isColor("rgba(0,0,0,256)") should return false ', function() {
			assert(!knife.isColor("rgba(0,0,0,256)"))
		});
		it('knife.isColor("rgba(0,0,0,1.1)") should return false ', function() {
			assert(!knife.isColor("rgba(0,0,0,1.1)"))
		});
		it('knife.isColor("rgba(0,0,0,0.222)") should return false ', function() {
			assert(knife.isColor("rgba(0,0,0,0.222)"))
		});
		it('knife.isColor("rgba(0,0,0,)") should return false ', function() {
			assert(!knife.isColor("rgba(0,0,0,)"))
		});
		it('knife.isColor("rgba(0,0,0)") should return false ', function() {
			assert(!knife.isColor("rgba(0,0,0)"))
		});
		it('knife.isColor("rgba(0,0,0,0.2)") should return false ', function() {
			assert(knife.isColor("rgba(0,0,0,0.2)"))
		});
		it('knife.isColor("rgba(24,0,0,.2)") should return false ', function() {
			assert(knife.isColor("rgba(24,0,0,0.2)"))
		});
	});

	describe('#isEmail()', function () {
		it('knife.isEmail("leiquanlive.com") should return false ', function () {
			assert.notEqual(knife.isEmail("leiquanlive.com"), true)
		});
		it('knife.isEmail("leiquan@live.com") should return true ', function () {
			assert(knife.isEmail("leiquan@live.com"))
		});
	});

	describe('#isIdCard()', function () {
		it('knife.isIdCard("622224188203234033") should return true ', function () {
			assert(knife.isIdCard("622224188203234033"))
		});
		it('knife.isIdCard("zas224188203234033") should return false', function () {
			assert(!knife.isIdCard("leiquan@live.com"))
		});
	});

	describe('#isPhoneNum()', function () {
		it('knife.isPhoneNum("18882324234") should return true ', function () {
			assert(knife.isPhoneNum("18882324234"))
		});
		it('knife.isPhoneNum("8618882324234") should return true ', function () {
			assert(knife.isPhoneNum("8618882324234"))
		});
		it('knife.isPhoneNum("5534553") should return false', function () {
			assert(!knife.isPhoneNum("5534553"))
		});
		it('knife.isPhoneNum("19056323241") should return true', function () {
			assert(knife.isPhoneNum("19056323241"))
		});
	});

	describe('#isUrl()', function () {
		it('knife.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
			assert(knife.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
		});
		it('knife.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
			assert(knife.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
		});
		it('knife.isUrl("www.baidu.com") should return true', function () {
			assert(knife.isUrl("www.baidu.com"))
		});
		it('knife.isUrl("baidu.com") should return true', function () {
			assert(knife.isUrl("baidu.com"))
		});
		it('knife.isUrl("http://baiducom") should return false', function () {
			assert(!knife.isUrl("http://baiducom"))
		});
	});

});