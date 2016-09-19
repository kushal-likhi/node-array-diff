var assert = require("assert"),
    arrayDiff = require('../');

describe('Array Diff Test Suite', function () {

    before(function (done) {
        this.timeout(10000);
        done();
    });

    describe('Element array diff Test', function () {

        it('should differentiate between numerical elements', function (done) {
            var result = arrayDiff(
                [1, 2, 3, 4, 5, 6],
                [1, 2, 4, 5, 6, 0, 9, 10]
            );
            console.log(result);
            assert(result);
            assert(result.added);
            assert(result.removed);
            assert.equal(result.added.length, 3);
            assert.equal(result.removed.length, 1);
            done();
        });

        it('should differentiate between string elements', function (done) {
            var result = arrayDiff(
                ['a', 'b', 'c'],
                ['c', 'd', 'e']
            );
            console.log(result);
            assert(result);
            assert(result.added);
            assert(result.removed);
            assert.equal(result.added.length, 2);
            assert.equal(result.removed.length, 2);
            done();
        });

        it('should differentiate between mixed elements', function (done) {
            var result = arrayDiff(
                ['a', 'b', 'c', 1, 3, 5, true],
                ['c', 'd', 'e', 7, 3, 4, 5, false, true]
            );
            console.log(result);
            assert(result);
            assert(result.added);
            assert(result.removed);
            assert.equal(result.added.length, 5);
            assert.equal(result.removed.length, 3);
            done();
        });
    });

    describe('Object array diff Test', function () {

        it('should differentiate between object elements', function (done) {
            var result = arrayDiff(
                [
                    {id:1, name: 'a'},
                    {id:2, name: 'b'},
                    {id:3, name: 'c'},
                    {id:4, name: 'd'},
                    {id:5, name: 'e'}
                ],
                [
                    {id:1, name: 'a'},
                    {id:2, name: 'b'},
                    {id:7, name: 'e'}
                ],
                'id'
            );
            console.log(result);
            assert(result);
            assert(result.added);
            assert(result.removed);
            assert.equal(result.added.length, 1);
            assert.equal(result.removed.length, 3);
            done();
        });
		
		 it('should differentiate between object elements when selector is a function', function (done) {
            var result = arrayDiff(
                [
                    {id:1, name: 'a'},
                    {id:2, name: 'b'},
                    {id:3, name: 'c'},
                    {id:4, name: 'd'},
                    {id:5, name: 'e'}
                ],
                [
                    {id:1, name: 'a'},
                    {id:2, name: 'b'},
                    {id:7, name: 'e'}
                ],
                function (x)
				{
					return x.id;
				}
            );
            console.log(result);
            assert(result);
            assert(result.added);
            assert(result.removed);
            assert.equal(result.added.length, 1);
            assert.equal(result.removed.length, 3);
            done();
        });
		
		it('should differentiate between object elements when selector is a function regardless of object depth', function (done) {
            var result = arrayDiff(
                  [
                    { id: 1, depthObj: { id: 1 }, name: 'a' },
                    { id: 2, depthObj: { id: 2 }, name: 'b' },
                    { id: 3, depthObj: { id: 3 }, name: 'c' },
                    { id: 4, depthObj: { id: 4 }, name: 'd' },
                    { id: 5, depthObj: { id: 5 }, name: 'e' }
                ],
                [
                    { id: 1, depthObj: { id: 1 }, name: 'a' },
                    { id: 2, depthObj: { id: 2 }, name: 'b' },
                    { id: 7, depthObj: { id: 7 }, name: 'e' }
                ],
                function (x) {
                    return x.depthObj.id;
                }
            );
            console.log(result);
            assert(result);
            assert(result.added);
            assert(result.removed);
            assert.equal(result.added.length, 1);
            assert.equal(result.removed.length, 3);
            done();
        });
		
		

    });

    after(function () {

    });
});
