var expect = require('chai').expect;
var day5 = require('../src/day5.js');

describe('Nice and naughty strings', function() {

	describe('contains three vowels', function(){
		it('aeo', function() {
			expect(day5.threeVowels('aeo')).to.equal(true);
		});
		it('xazegov', function() {
			expect(day5.threeVowels('xazegov')).to.equal(true);	
		});
		it('notcor', function() {
			expect(day5.threeVowels('notcor')).to.equal(false);	
		});
	});

	describe('Contains dubble letters', function() {
		it('aa', function() {
			expect(day5.isDubbleLetter('aa')).to.equal(true);
		});
		it('cat', function() {
			expect(day5.isDubbleLetter('cat')).to.equal(false);
		});
		it('aabbccdd', function() {
			expect(day5.isDubbleLetter('aabbccdd')).to.equal(true);
		});
	});

	describe('Does not contain forbidden string', function() {
		it('ab', function() {
			expect(day5.containsForbiddenString('cab')).to.true;
		});
		it('cd', function() {
			expect(day5.containsForbiddenString('ccd')).to.true;
		});
		it('pq', function() {
			expect(day5.containsForbiddenString('cpq')).to.true;
		});
		it('xy', function() {
			expect(day5.containsForbiddenString('cxy')).to.true;
		});
	});

	it('ugknbfddgicrmopn is nice', function() {
		expect(day5.isNice('ugknbfddgicrmopn')).to.true;
	});

	it('jchzalrnumimnmhp is naughty because no dubble letters', function() {
		expect(day5.isNice('jchzalrnumimnmhp')).to.false;
	});
	it('haegwjzuvuyypxyu is naughty because substring xy', function() {
		expect(day5.isNice('haegwjzuvuyypxyu')).to.false;
	});

	it('dvszwmarrgswjxmb is naughty because not three vowels', function() {
		expect(day5.isNice('dvszwmarrgswjxmb')).to.false;
	});
});

describe('Naugthy and nice strings part 2', function() {
	describe('double sequence', function() {
		it('a pair occurs twice', function() {
			expect(day5.doubleSequence('xyxy')).to.true;
		});
		it('aaa does not occure twice', function() {
			expect(day5.doubleSequence('aaa')).to.false;
		});

		it('qjhvhtzxzqqjkmpb qj occurs twice', function() {
			expect(day5.doubleSequence('qjhvhtzxzqqjkmpb')).to.true;
		});
	});
	
	it('Repeats one letter with one between', function() {
		expect(day5.repeatsOneLeter('aaa')).to.true;

	});

	it('Repeats one letter with one between, xyx', function() {
		expect(day5.repeatsOneLeter('xyx')).to.true;

	});
	it('qjhvhtzxzqqjkmpb is nice', function() {
		expect(day5.isNiceSecondVersion('qjhvhtzxzqqjkmpb')).to.true;
	});
	it('xxyxx is nice', function() {
		expect(day5.isNiceSecondVersion('xxyxx')).to.true;
	});
	it('uurcxstgmygtbstg is naughty because does not repeat', function() {
		expect(day5.isNiceSecondVersion('uurcxstgmygtbstg')).to.false;
	});
	it('ieodomkazucvgmuy is naughty because no pair', function() {
		expect(day5.isNiceSecondVersion('ieodomkazucvgmuy')).to.false;
	});
});
