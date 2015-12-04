var md5 = require('md5');

exports.getAdventCoin = function(secretKey, numberOfZeroes) {

  var done = false;
  var hash;
  var zeroString = Array(numberOfZeroes +1).join('0');
  for(var i = 0; !done; i++) {
    hash = md5(secretKey+i);
    if(hash.substring(0,numberOfZeroes) ===zeroString) {
      done = true;
      return i;
    }

  }
  

};
