
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
})('C:/Users/aser/javascript/adventofcode/adventofcode2015/src/first.js', [1,3,5], {"2_4_13":0,"4_11_13":0}, ["exports.whichFloor = function(input) {","\tif(input === '(') {","\t\treturn 1;","\t} else if(input === ')') {","\t\treturn -1;","\t}","};",""]);
_$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/first.js", "line", 1);

exports.whichFloor = function(input) {
    if (_$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/first.js", "cond", "2_4_13", input === "(")) {
        _$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/first.js", "line", 3);
        return 1;
    } else if (_$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/first.js", "cond", "4_11_13", input === ")")) {
        _$jscmd("C:/Users/aser/javascript/adventofcode/adventofcode2015/src/first.js", "line", 5);
        return -1;
    }
};