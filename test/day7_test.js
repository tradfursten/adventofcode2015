var day7 = require('../src/day7.js');
var expect = require('chai').expect;

describe('Parse input', function() {
	it('Assignement 123 -> x', function() {
		var operations = day7.parseInput(['123 -> x']);
		expect(operations.x.input0).to.equal('123');
	});

	it('Assignement x -> y', function() {
		expect(day7.parseInput(['x -> y']).y.input0).to.equal('x');
	});
	
	it('NOT x -> y', function() {
		var operations = day7.parseInput(['NOT x -> y']);
		expect(operations.y.op).to.equal('NOT');
		expect(operations.y.input0).to.equal('x');
	});
});

describe('Get value', function() {
	it('Simple get value', function() {
		var operations = day7.parseInput(['123 -> x']);
		expect(day7.getValue(operations, 'x')).to.equal(123);
	});
	it('Simple get derived value', function() {
		var operations = day7.parseInput(['123 -> x','x -> y']);
		expect(day7.getValue(operations, 'y')).to.equal(123);
	});
	it('Not 1 is -2', function() {
		var operations = day7.parseInput(['NOT 1 -> x']);
		expect(day7.getValue(operations, 'x')).to.equal(-2);
	});
});
