module.exports = {
	sumNumbers: function(o) {
		return (o.match(/-?(\d+)/g) || []).map(Number).reduce(function(prev, curr) {return prev + curr; }, 0);
	},
	sumRed: function(o) {
		return _sum(JSON.parse(o));
}

function _sum(o) {
		var sum = 0;
		var keys = Object.keys(o);
		for(var i = 0; i < keys.length; i++) {
			if(!isNaN(o[keys[i]])) {
				sum+= Number(o[keys[i]]);
			} else if(o[keys[i]] === 'red') { 
				return 0;
			} else {
				sum += _sum(o[keys[i]]);
			}
		}
		return sum;
}
