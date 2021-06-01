describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`knife.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${knife.getExplore()}`)
            assert(/^Chrome:/.test(knife.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`knife.getOS() should return "windows"`, function () {
            console.log(`OS:${knife.getOS()}`)
            assert(knife.getOS() === 'windows' || knife.getOS() === 'MacOSX' || knife.getOS() === 'linux')
        });
    });
});