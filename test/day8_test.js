var day8 = require('../src/day8.js');
var expect = require('chai').expect;

describe('Compute size in memory and size in code', function() {
  it('Memory size of ""', function() {
    expect(day8.memSize('""')).to.equal(0);
  });
  it('Code size of "" is 2', function() {
    expect(day8.codeSize('""')).to.equal(2);
  });

  it('Memory size of " \\x27"', function() {
    expect(day8.memSize('"\x27"')).to.equal(1);
  });
  it('Code size of "\\x27" is 6', function() {
    expect(day8.codeSize('"\\x27"')).to.equal(6);
  });
  it('Difference between memory and code of "" is 2', function() {
    expect(day8.difference(['""'])).to.equal(2);
  });
});

describe('Encode and compare difference between old codesize and new codesize', function() {
  it('"" encodes to "\\"\\""', function() {
    expect(day8.codeSize(day8.encode('""'))).to.equal(6);
  });
  it('Difference between new encoded and code of "" is 4', function() {
    expect(day8.differencePart2(['""'])).to.equal(4);
  });
  it('"abc" encodes to 9 in code size', function() {
    expect(day8.codeSize(day8.encode('"abc"'))).to.equal(9);
  });
  it('"\\x27" encodes to 9 in code size', function() {
    expect(day8.codeSize(day8.encode('"\\x27"'))).to.equal(11);
  });

  it('"aaa\\"aaa" encodes to 9 in code size', function() {
    expect(day8.codeSize(day8.encode('"aaa\\"aaa"'))).to.equal(16);
  });

  it('Difference from given input', function() {
    expect(day8.differencePart2(['""', '"aaa"', '"aaa\\"aaa"', '"\\x27"'])).to.equal(19);
  });

});
