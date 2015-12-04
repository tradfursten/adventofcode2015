var expect = require('chai').expect;
var first = require('../src/first.js');
describe('Test for the first in adventofcode', function() {
	it('( is one floor up', function () {
		expect(first.whichFloor('(')).to.equal(1);
	});

	it(') is one floor down', function() {
		expect(first.whichFloor(')')).to.equal(-1);
	});
});
