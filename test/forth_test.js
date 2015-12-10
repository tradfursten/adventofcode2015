var expect = require('chai').expect;
var forth = require('../src/forth.js');

describe('Test suite for day 4', function() {
  it('abcdef returns 609043', function() {
    this.timeout(15000);
    expect(forth.getAdventCoin('abcdef', 5)).to.equal(609043);
  });

  it('pqrstuv returns 1048970', function(){
    this.timeout(15000);
    expect(forth.getAdventCoin('pqrstuv', 5)).to.equal(1048970);
  });

  it('problem input? iwrupvqb', function() {
    this.timeout(15000);
    console.log(forth.getAdventCoin('iwrupvqb', 5));
  });

  it('puzzelinput with 6 zeroes', function() {
    this.timeout(600000);
    console.log(forth.getAdventCoin('iwrupvqb', 6));
  });

});
