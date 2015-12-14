var expect = require('chai').expect;
var day11 = require('../src/day11.js');

describe('Validate passwords', function() {
	it('Password without sequence is not valid', function() {
		expect(day11.validatePassword('aaaaaaaa')).to.false;
	});

	it('Password can not contain i', function() {
		expect(day11.validatePassword('abciffaa')).to.false;
	});

	it('Password can not contain o', function() {
		expect(day11.validatePassword('abcoffaa')).to.false;
	});
	it('Password can not contain j', function() {
		expect(day11.validatePassword('abcjffaa')).to.false;
	});

	it('Password has to have two dupications', function() {
		expect(day11.validatePassword('abcdefgh')).to.false;
	});
});

describe('Next valid password', function() {
	it('Next valid abcdefgh is abcdffaa', function() {
		expect(day11.getNextPassword('abcdefgh')).to.equal('abcdffaa');
	});

	it('Puzzle input', function() {
		expect(day11.getNextPassword('hxbxwxba')).to.equal('hxbxxyzz');
	});
	
	it('Puzzle input, problem 2', function() {
		expect(day11.getNextPassword(day11.getNextPassword('hxbxwxba'))).to.equal('hxcaabcc');

	});
});
