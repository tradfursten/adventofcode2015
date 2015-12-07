var day6 = require('../src/day6.js');
var expect = require('chai').expect;

describe('Santas light stuff', function() {
  it('turn on 0,0 through 0,0 lights the first light', function() {
    expect(day6.howManyLights(['turn on 0,0 through 0,0'])).to.equal(1);
  });
  it('turn on 0,0 through 999,0 lights the first line of light', function() {
    expect(day6.howManyLights(['turn on 0,0 through 999,0'])).to.equal(1000);
  });

  it('turn on then of resuls in zero', function() {
    expect(day6.howManyLights(['turn on 0,0 through 0,0', 'turn off 0,0 through 0,0'])).to.equal(0);

  });

  it('turn on first row then toggle a 3 by three should result in 1003', function() {
    expect(day6.howManyLights(['turn on 0,0 through 0,999', 'toggle 0,0 through 2,2'])).to.equal(1003);
    
  });
});


