var expect = require('chai').expect;
var day12 = require('../src/day12.js');

describe('Sum all numbers in document', function() {
	it('[1,2,3] sums to 6', function() {
		expect(day12.sumNumbers('[1, 2, 3]')).to.equal(6);
	});
	it('{"a":2,"b":4} sums to 6', function() {
		expect(day12.sumNumbers('{"a":2,"b":4}')).to.equal(6);
	});
	it('[[[3]]] sums to 3', function() {
		expect(day12.sumNumbers('[[[3]]]')).to.equal(3);
	});
	it('{"a":{"b":4},"c":-1} sums to 3', function() {
		expect(day12.sumNumbers('{"a":{"b":4},"c":-1}')).to.equal(3);
	});
	it('{"a":[-1,1]} sums to 0', function() {
		expect(day12.sumNumbers('{"a":[-1,1]}')).to.equal(0);
	});
	it('[-1,{"a":1}] sums to 0', function() {
		expect(day12.sumNumbers('[-1,{"a":1}]')).to.equal(0);
	});
	it('[] sums to 0', function() {
		expect(day12.sumNumbers('[]')).to.equal(0);
	});
	it('{} sums to 0', function() {
		expect(day12.sumNumbers('{}')).to.equal(0);
	});
});

