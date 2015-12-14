module.exports = {
  createGraph: function(input) {
    var o = {};
    var match;
    for(var i = 0; i < input.length; i++) {
      match = input[i].match(/(\w+)/g);
      if(!o[match[0]]) {
        o[match[0]] = {};
      }
      if(!o[match[2]]) {
        o[match[2]] = {};
      }
      o[match[0]][match[2]] = parseInt(match[3]);
      o[match[2]][match[0]] = parseInt(match[3]);
    }
    return o;
  },
  shortestPath: function(graph) {


  }

}
