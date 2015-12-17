var permutate = require('./permutate.js');

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
		return _calculate(graph, Math.min, Number.MAX_SAFE_INTEGER);;
  },
  longestPath: function(graph) {
  	return _calculate(graph, Math.max, Number.MIN_SAFE_INTEGER);
  }
}

function _calculate(graph, f, initialValue) {
  	var nodes = Object.keys(graph);

  	var permutations = permutate(nodes);
		var l =  permutations.reduce(function(prev, current) { 
			return f(prev, _getLength(current, graph)); 
		}, initialValue);

		return l;
}

function _getLength(path, graph) {
	var l = 0;
	var temp;
	for(var i = 0; i < path.length-1; i++) {
		temp = graph[path[i]];
		l += temp[path[i+1]];	
	}
	return l;
}
