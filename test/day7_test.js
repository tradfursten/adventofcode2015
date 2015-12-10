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
	it('x AND x -> y', function() {
		var operations = day7.parseInput(['x AND x -> y']);
		expect(operations.y.op).to.equal('AND');
		expect(operations.y.input0).to.equal('x');
		expect(operations.y.input1).to.equal('x');
	});
	it('x LSHIFT 2 -> y', function() {
		var operations = day7.parseInput(['x LSHIFT 2 -> y']);
		expect(operations.y.op).to.equal('LSHIFT');
		expect(operations.y.input0).to.equal('2');
		expect(operations.y.input1).to.equal('x');
	});
	it('x RSHIFT 2 -> y', function() {
		var operations = day7.parseInput(['x RSHIFT 2 -> y']);
		expect(operations.y.op).to.equal('RSHIFT');
		expect(operations.y.input0).to.equal('2');
		expect(operations.y.input1).to.equal('x');
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
	it('Not 1 is 65534', function() {
		var operations = day7.parseInput(['NOT 1 -> x']);
		expect(day7.getValue(operations, 'x')).to.equal(65534);
	});
	
	it('1 AND 3 is 1', function() {
		var operations = day7.parseInput(['1 AND 3 -> x']);
		expect(day7.getValue(operations, 'x')).to.equal(1);
	});
	it('1 OR 2 is 3', function() {
		var operations = day7.parseInput(['1 OR 2 -> x']);
		expect(day7.getValue(operations, 'x')).to.equal(3);
	});
	it('2 LSHIFT 2 -> y', function() {
		var operations = day7.parseInput(['2 LSHIFT 2 -> y']);
		expect(day7.getValue(operations, 'y')).to.equal(8);
	});
	it('2 RSHIFT 2 -> y', function() {
		var operations = day7.parseInput(['2 RSHIFT 2 -> y']);
		expect(day7.getValue(operations, 'y')).to.equal(0);
	});

	it('Test from assignemnt', function() {
	var input = ['123 -> x', '456 -> y', 'x AND y -> d', 'x OR y -> e', 'x LSHIFT 2 -> f', 'y RSHIFT 2 -> g', 'NOT x -> h', 'NOT y -> i']
	
	var op = day7.parseInput(input);	
	console.log(op);
	expect(day7.getValue(op, 'i')).to.equal(65079);
	});
});
