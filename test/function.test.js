describe('Function API:', function () {
    describe('#debounce()', function () {
        const debounce = hx_utils.debounce;

        it(`debounce expect(obj.add).toHaveBeenCalledTimes(0);`, function (done) {
            let obj = {
                num: 1,
                add: function () {
                    this.num++;
                },
            };
            let interval = null;
            spyOn(obj, 'add');
            let debounced = debounce(100, function () {
                obj.add();
            });
            interval = setInterval(function () {
                debounced();
            }, 20);
            setTimeout(function () {
                expect(obj.add).toHaveBeenCalledTimes(0);
                clearInterval(interval);
                done();
            }, 400);
        });
        it(`debounce expect(obj.add).toHaveBeenCalledTimes(1);`, function (done) {
            let obj = {
                num: 1,
                add: function () {
                    this.num++;
                },
            };
            let interval = null;
            spyOn(obj, 'add');
            let debounced = debounce(100, function () {
                obj.add();
            });
            interval = setInterval(function () {
                debounced();
            }, 20);
            setTimeout(function () {
                clearInterval(interval);
            }, 400);
            setTimeout(function () {
                expect(obj.add).toHaveBeenCalledTimes(1);
                done();
            }, 600);
        });
        it(`debounce expect(obj.add).toHaveBeenCalledTimes(2);`, function (done) {
            let obj = {
                num: 1,
                add: function () {
                    this.num++;
                },
            };
            let interval = null;
            spyOn(obj, 'add');
            let debounced = debounce(100, function () {
                obj.add();
            });
            interval = setInterval(function () {
                debounced();
            }, 20);
            setTimeout(function () {
                clearInterval(interval);
                setTimeout(function () {
                    interval = setInterval(function () {
                        debounced();
                    }, 20);
                }, 100);
                setTimeout(function () {
                    clearInterval(interval);
                }, 200);
            }, 400);
            setTimeout(function () {
                expect(obj.add).toHaveBeenCalledTimes(2);
                done();
            }, 700);
        });
    });

    describe('throttle()', function () {
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
