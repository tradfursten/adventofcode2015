
// instrument by jscoverage, do not modifly this file
(function (file, lines, conds, source) {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (BASE._$jscoverage) {
    BASE._$jscmd(file, 'init', lines, conds, source);
    return;
  }
  var cov = {};
  /**
   * jsc(file, 'init', lines, condtions)
   * jsc(file, 'line', lineNum)
   * jsc(file, 'cond', lineNum, expr, start, offset)
   */
  function jscmd(file, type, line, express, start, offset) {
    var storage;
    switch (type) {
      case 'init':
        if(cov[file]){
          storage = cov[file];
        } else {
          storage = [];
          for (var i = 0; i < line.length; i ++) {
            storage[line[i]] = 0;
          }
          var condition = express;
          var source = start;
          storage.condition = condition;
          storage.source = source;
        }
        cov[file] = storage;
        break;
      case 'line':
        storage = cov[file];
        storage[line] ++;
        break;
      case 'cond':
        storage = cov[file];
        storage.condition[line] ++;
        return express;
    }
  }

  BASE._$jscoverage = cov;
  BASE._$jscmd = jscmd;
  jscmd(file, 'init', lines, conds, source);
})('C:/Users/aser/javascript/adventofcode/adventofcode2015/src/forth.js', [1,3,5,6,7,9,11,12], {"10_7_46":0}, ["var md5 = require('md5');","","exports.getAdventCoin = function(secretKey, numberOfZeroes) {","","  var done = false;","  var hash;","  var zeroString = Array(numberOfZeroes +1).join('0');","  for(var i = 0; !done; i++) {","    hash = md5(secretKey+i);","    if(hash.substring(0,numberOfZeroes) ===zeroString) {","      done = true;","      return i;","    }","","  }","  ","","};",""]);
_$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/forth.js", "line", 1);

var md5 = require("md5");

_$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/forth.js", "line", 3);

exports.getAdventCoin = function(secretKey, numberOfZeroes) {
    _$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/forth.js", "line", 5);
    var done = false;
    _$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/forth.js", "line", 6);
    var hash;
    _$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/forth.js", "line", 7);
    var zeroString = Array(numberOfZeroes + 1).join("0");
    for (var i = 0; !done; i++) {
        _$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/forth.js", "line", 9);
        hash = md5(secretKey + i);
        if (_$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/forth.js", "cond", "10_7_46", hash.substring(0, numberOfZeroes) === zeroString)) {
            _$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/forth.js", "line", 11);
            done = true;
            _$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/forth.js", "line", 12);
            return i;
        }
    }
};