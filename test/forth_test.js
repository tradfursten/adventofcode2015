var expect = require('chai').expect;
var forth = require('../src/forth.js');

describe('Test suite for day 4', function() {
  xit('abcdef returns 609043', function() {
    this.timeout(15000);
    expect(forth.getAdventCoin('abcdef', 5)).to.equal(609043);
  });

  xit('pqrstuv returns 1048970', function(){
    this.timeout(15000);
    expect(forth.getAdventCoin('pqrstuv', 5)).to.equal(1048970);
  });

  xit('problem input? iwrupvqb', function() {
    this.timeout(15000);
    console.log(forth.getAdventCoin('iwrupvqb', 5));
  });

  xit('puzzelinput with 6 zeroes', function() {
    this.timeout(600000);
    console.log(forth.getAdventCoin('iwrupvqb', 6));
  });

});
