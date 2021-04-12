describe('Function API:', function () {
    describe('#debounce()', function () {
        const debounce = hx_utils.debounce;
        it(`hx_utils.debounce(200,function(){return true}) should return true`, function (done) {
            let num = 0;
            let interval = null;
            let debounced = debounce(500, function () {
                num++;
                expect(num).toEqual(1);
                done();
                return true;
            });
            interval = setInterval(function () {
                debounced();
            }, 20);
            setTimeout(function () {
                clearInterval(interval);
            }, 800);
        });
    });

    describe('#throttle()', function () {
        const throttle = hx_utils.throttle;
        it(`hx_utils.throttle(100, function(){return true}) should return true`, function (done) {
            let num = 0;
            let interval = null;
            let throttled = throttle(100, true, function () {
                num++;
                return true;
            });
            interval = setInterval(function () {
                throttled();
            }, 20);
            setTimeout(function () {
                expect(num).toBeLessThan(Math.floor(200 / 20));
                clearInterval(interval);
                done();
            }, 400);
        });
    });
});
