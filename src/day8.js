module.exports = {
  memSize: function(input) {
    var temp = eval(input);
    return temp? temp.length: 0;
  },
  codeSize: function(input) {
    return input.length;
  },
  difference: function(input) {
    var memory = 0;
    var code = 0;
    for(var i = 0; i < input.length; i++) {
      memory += this.memSize(input[i]);
      code += this.codeSize(input[i]);
    }
    return code - memory;
  },
  encode: function(input) {
    return '"' + input.replace(/([\\"])/g, '\\$1') + '"';
  },
  differencePart2: function(input) {
    var newCode = 0;
    var code = 0;
    for(var i = 0; i < input.length; i++) {
      var newEncoded = this.encode(input[i]);
      var stringify = JSON.stringify(input[i]);
      if(newEncoded != stringify) {
          console.log(input[i] + " || " + newEncoded + " || " + stringify);
      }
      newCode += this.codeSize(newEncoded);
      code += this.codeSize(input[i]);
    }
    return newCode - code;
  }

}
