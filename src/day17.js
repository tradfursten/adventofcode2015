var permutate = require('./permutate.js');

module.exports = {

  part1: function(input){
    return this.getCombinations(input.trim().split('\r\n').map(Number)).length;
  },

  part2: function(input){
    const results =  this.getCombinations(input.trim().split('\r\n').map(Number));
    const minLenght = results.reduce((prev, curr) => { 
      return Math.min(prev, curr.length); 
    }, Number.MAX_SAFE_INTEGER);
    return results.filter(value => { return value.length === minLenght;}).length;
  },

  getCombinations: function(input) {
    const combinations = _getCombinations(input);
    return combinations.filter(value => { return value.reduce((prev, current) => { return prev+current; }, 0) === 150;});

  }


  };

  function _getCombinations(input) {
    const getCombinations = (currentBucket, rest, result) => {
        if(currentBucket.length === 0 && rest.length === 0) {
          return;
        }
        if(rest.length === 0) {
          result.push(currentBucket);
        } else {
          getCombinations(currentBucket.concat(rest[0]), rest.slice(1), result);
          getCombinations(currentBucket, rest.slice(1), result);
        }
        return result;
    };

    return getCombinations([], input, []);
  }
